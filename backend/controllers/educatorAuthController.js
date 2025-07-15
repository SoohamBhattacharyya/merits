
const Educator = require("../models/educatorModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Register
exports.registerEducator = async (req, res) => {
  try {
    const { name, email, institute, phone, password } = req.body;

    const existingEducator = await Educator.findOne({ email });
    if (existingEducator) {
      return res.status(400).json({ message: "Educator already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEducator = new Educator({
      name,
      email,
      institute,
      phone,
      password: hashedPassword
    });

    await newEducator.save();
    res.status(201).json({ message: "Educator registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Login Educator
exports.loginEducator = async (req, res) => {
  try {
    const { email, password } = req.body;

    const educator = await Educator.findOne({ email });
    if (!educator) {
      return res.status(404).json({ message: "Educator not found" });
    }

    const isMatch = await bcrypt.compare(password, educator.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: educator._id, role: "educator" },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      educator: {
        id: educator._id,
        name: educator.name,
        email: educator.email,
        institute: educator.institute
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
