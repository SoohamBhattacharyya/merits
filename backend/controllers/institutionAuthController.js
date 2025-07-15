const Institution = require("../models/institutionModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Register Institution 
exports.registerInstitution = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;

    const existingInstitution = await Institution.findOne({ email });
    if (existingInstitution) {
      return res.status(400).json({ message: "Institution already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newInstitution = new Institution({
      name,
      email,
      contact,
      password: hashedPassword
    });

    await newInstitution.save();
    res.status(201).json({ message: "Institution registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Login Institution 
exports.loginInstitution = async (req, res) => {
  try {
    const { email, password } = req.body;

    const institution = await Institution.findOne({ email });
    if (!institution) {
      return res.status(404).json({ message: "Institution not found" });
    }

    const isMatch = await bcrypt.compare(password, institution.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: institution._id, role: "institution" },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      institution: {
        id: institution._id,
        name: institution.name,
        email: institution.email
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
