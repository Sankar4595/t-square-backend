const mongoose = require("mongoose");

const TechBridgeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
});

// Use the correct schema and model name
const TechBridgeModel = mongoose.model("techBridges", TechBridgeSchema);

module.exports = TechBridgeModel;
