
const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  equity: {
    availableMargin: { type: Number, default: 0 },
    usedMargin: { type: Number, default: 0 },
    availableCash: { type: Number, default: 0 },
  },
  commodity: {
    availableMargin: { type: Number, default: 0 },
    usedMargin: { type: Number, default: 0 },
  }
}, { timestamps: true });

module.exports = { FundsSchema };