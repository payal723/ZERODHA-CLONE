require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const User = require("./model/UserModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");
const { FundsModel } = require("./model/FundsModel");
const path = require("path");

const app = express();
app.use(express.json());
const __dirname = path.resolve();


// const allowedOrigins = ["http://localhost:5173", "http://localhost:5174",
//     "https://zerodha-frontend-xvgh.onrender.com", 
//     "https://zerodha-clone-6al2.onrender.com", 
//   "https://zerodha-clone-1-cega.onrender.com" ,
//    "*"
// ];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('This origin is not allowed by CORS'));
//     }
//   },
//   credentials: true,
// }));
app.use(cors()); 
app.use(
  cors({
    origin: [
      "https://zerodha-frontend-xvgh.onrender.com",
      "https://zerodha-clone-1-cega.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/", express.static(path.join(__dirname, "FrontEnd-dist")));
app.use("/dashboard", express.static(path.join(__dirname, "dist")));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'Token not provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};


app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) return res.status(400).json({ message: "All fields required!" });
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists!" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials!" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.get("/api/me", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error." });
  }
});

app.get("/allHoldings", authenticateToken, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({ userId: req.user.id });
    res.status(200).json(holdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Holdings fetch nahi ho sake." });
  }
});

app.post("/newOrder", authenticateToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const quantity = parseInt(qty);
    const purchasePrice = parseFloat(price);
    const userId = req.user.id;
    if (!name || isNaN(quantity) || isNaN(purchasePrice) || !mode) {
      return res.status(400).json({ message: "Sabhi fields zaroori hain." });
    }
    const newOrder = new OrdersModel({ name, qty: quantity, price: purchasePrice, mode, userId });
    await newOrder.save();
    const existingHolding = await HoldingsModel.findOne({ name: name, userId: userId });
    if (existingHolding) {
      const totalQty = existingHolding.qty + quantity;
      const newAvg = ((existingHolding.avg * existingHolding.qty) + (purchasePrice * quantity)) / totalQty;
      existingHolding.qty = totalQty;
      existingHolding.avg = newAvg;
      existingHolding.price = purchasePrice;
      await existingHolding.save();
    } else {
      const newHolding = new HoldingsModel({
        name, qty: quantity, avg: purchasePrice, price: purchasePrice,
        net: "0.00%", day: "0.00%", userId
      });
      await newHolding.save();
    }
    res.status(201).json({ message: "Order placed and holdings updated!" });
  } catch (err) {
    console.error("Order place karte samay error:", err);
    res.status(500).json({ message: "Order place nahi ho saka." });
  }
});

app.post("/sellOrder", authenticateToken, async (req, res) => {
    try {
      const { name, qty, price } = req.body;
      const quantity = parseInt(qty);
      const sellPrice = parseFloat(price);
      const userId = req.user.id;
      if (!name || isNaN(quantity) || quantity <= 0 || isNaN(sellPrice)) {
          return res.status(400).json({ message: "Invalid sell order data." });
      }
      const holding = await HoldingsModel.findOne({ name: name, userId: userId });
      if (!holding || holding.qty < quantity) {
          return res.status(400).json({ message: `Insufficient shares. You only have ${holding ? holding.qty : 0}.` });
      }
      const newOrder = new OrdersModel({ name, qty: quantity, price: sellPrice, mode: 'SELL', userId });
      await newOrder.save();
      const funds = await FundsModel.findOne({ userId: userId });
      if (funds) {
          funds.equity.availableMargin += sellPrice * quantity;
          funds.equity.availableCash += sellPrice * quantity;
          await funds.save();
      }
      holding.qty -= quantity;
      if (holding.qty === 0) {
          await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
          await holding.save();
      }
      res.status(201).json({ message: `Successfully sold ${quantity} shares of ${name.replace('.NS','')}!` });
    } catch (err) {
        console.error("Sell Order Error:", err);
        res.status(500).json({ message: "Failed to execute sell order." });
    }
});

app.get("/api/orders", authenticateToken, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Orders fetch nahi ho sake." });
  }
});

app.get("/api/positions", authenticateToken, async (req, res) => {
  try {
    const positions = await PositionsModel.find({ userId: req.user.id });
    res.status(200).json(positions);
  } catch (err) {
    res.status(500).json({ message: "Positions fetch nahi ho saki." });
  }
});

app.get("/api/summary", authenticateToken, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({ userId: req.user.id });
    let totalInvestment = 0;
    let currentValue = 0;
    holdings.forEach(holding => {
      totalInvestment += holding.avg * holding.qty;
      currentValue += holding.price * holding.qty;
    });
    res.status(200).json({ totalInvestment, currentValue, holdingsCount: holdings.length });
  } catch (err) {
    res.status(500).json({ message: "Summary data fetch nahi ho saka." });
  }
});

app.get("/api/funds", authenticateToken, async (req, res) => {
  try {
    let funds = await FundsModel.findOne({ userId: req.user.id });
    if (!funds) {
      funds = new FundsModel({
        userId: req.user.id,
        equity: { availableMargin: 5000, availableCash: 5000 }
      });
      await funds.save();
    }
    res.status(200).json(funds);
  } catch (err) {
    res.status(500).json({ message: "Funds fetch nahi ho sake." });
  }
});

app.post("/api/funds/add", authenticateToken, async (req, res) => {
  try {
    const { amount } = req.body;
    const addAmount = parseFloat(amount);
    if (isNaN(addAmount) || addAmount <= 0) {
        return res.status(400).json({ message: "Invalid amount." });
    }
    const funds = await FundsModel.findOne({ userId: req.user.id });
    if (!funds) {
        return res.status(404).json({ message: "Funds not found for user." });
    }
    funds.equity.availableMargin += addAmount;
    funds.equity.availableCash += addAmount;
    await funds.save();
    res.status(200).json({ message: `Successfully added ₹${addAmount}`, funds });
  } catch (err) {
    res.status(500).json({ message: "Failed to add funds." });
  }
});

app.get("/api/market-data", async (req, res) => {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: "Alpha Vantage API key server par nahi hai." });
  }
  try {
    const stockSymbols = ["INFY.BSE", "ONGC.BSE", "TCS.BSE", "RELIANCE.BSE", "WIPRO.BSE", "HDFCBANK.BSE"];
    const marketData = [];
    for (const symbol of stockSymbols) {
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
      const response = await axios.get(url);
      const quote = response.data["Global Quote"];
      if (quote && Object.keys(quote).length > 0) {
        marketData.push({
          symbol: quote["01. symbol"],
          price: parseFloat(quote["05. price"]),
          changesPercentage: parseFloat(quote["10. change percent"].replace('%','')),
        });
      } else {
        if (response.data.Note) { break; }
      }
      await new Promise(resolve => setTimeout(resolve, 15000));
    }
    res.status(200).json(marketData);
  } catch (error) {
    res.status(500).json({ message: "Alpha Vantage API se data fetch nahi ho saka." });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));