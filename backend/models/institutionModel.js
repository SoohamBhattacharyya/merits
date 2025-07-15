const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Institution", institutionSchema);
