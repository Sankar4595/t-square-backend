const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  mobile: {
    type: String,
    required: [true, "Please provide mobile number"],
    validate: {
      validator: (v) => /^[0-9]{10}$/.test(v), // Ensures a 10-digit number
      message: "Please provide a valid mobile number",
    },
  },
  role: {
    type: String,
    enum: ["Custodian", "Talent"],
    required: [true, "Please select your role"],
  },
  experience: {
    type: Number,
    required: [true, "Please provide years of experience"],
    min: 0,
  },
  designation: {
    type: String,
    required: [true, "Please provide your designation"],
  },
  institution: {
    type: String,
    required: [true, "Please provide your institution name"],
  },
  status: {
    type: String,
    enum: ["active", "banned"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
