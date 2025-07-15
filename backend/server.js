
const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // ✅ Import CORS
const studentRoutes = require('./routes/studentRoutes');
const educatorRoutes = require("./routes/educatorRoutes");
const institutionRoutes = require("./routes/institutionRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
const app = express();

app.use(cors()); // ✅ Enable CORS for all origins
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ Mongo Error:', err));

// Routes
app.use('/api/student', studentRoutes);
app.use("/api/educator", educatorRoutes);
app.use("/api/institution", institutionRoutes);
app.use("/api/admin", adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
