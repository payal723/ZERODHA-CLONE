// BackEnd/schemas/PositionsSchema.js

const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number, // Last Traded Price
  day: String,
  isLoss: Boolean,
}, { timestamps: true });

module.exports = { PositionsSchema };