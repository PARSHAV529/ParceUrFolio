const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://parshav143:neh59@cluster0.igjbssc.mongodb.net/ParceUrFolio"; // Replace with your MongoDB URI if using a cloud DB

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit the app if connection fails
  });

// Debug connection status
mongoose.connection.on("connected", () => {
  console.log("🔗 Mongoose is connected to the database.");
});

mongoose.connection.on("error", (err) => {
  console.error("🚨 Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ Mongoose connection is disconnected.");
});

// API Routes
app.use("/api", portfolioRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
