const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  address: { type: String, required: true },
  role: {
    type: String,
    default: "Customer",
  },
});

module.exports = mongoose.model("User", userSchema);
