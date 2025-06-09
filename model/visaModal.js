const mongoose = require("mongoose");

const VisaModalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        default: "United Kingdom",
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
    duration: {
        type: String,
        default: "1 Month",
    },
    createdAt: {
        type: Date,
        default: () => new Date(),
    },
    updatedAt: {
        type: Date,
        default: () => new Date(),
    },
    techBridgeRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "techBridges",
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
});

const VisaModalModel = mongoose.model("VisaModal", VisaModalSchema);
module.exports = VisaModalModel;
