const mongoose = require("mongoose");

const educatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    institute: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Educator", educatorSchema);
