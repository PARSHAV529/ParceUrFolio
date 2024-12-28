const express = require("express");
const router = express.Router();
const Portfolio = require("../model/Portfolio"); // Adjust the path if necessary

// POST route to host a portfolio
router.post("/host", async (req, res) => {
  try {
    const portfolioData = req.body;
console.log(portfolioData);

    // Basic validation
    if (!portfolioData.formData || !portfolioData.theme || !portfolioData.template) {
      return res.status(400).json({ message: "Basic info is required." });
    }

    // Save portfolio data to the database
    const portfolio = new Portfolio(portfolioData);
    const savedPortfolio = await portfolio.save();

    res.status(200).json({ message: "Portfolio hosted successfully!", id: savedPortfolio._id });
  } catch (error) {
    // console.log(req.body);

    console.error("Error hosting portfolio:", error);

    res.status(500).json({ message: "Failed to host portfolio" });
  }
});

// GET route to fetch all hosted portfolios (optional, for testing)
router.get("/portfolios", async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    console.log(portfolios);
    
    res.status(200).json(portfolios);
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    res.status(500).json({ message: "Failed to fetch portfolios" });
  }
});

// GET route to fetch a specific portfolio by githubUsername
// GET route to fetch a specific portfolio by githubUsername
router.get("/portfolio/github/:githubUsername", async (req, res) => {
  try {
    const { githubUsername } = req.params; // Extract githubUsername from the URL parameter
    // console.log(githubUsername);

    // Find the portfolio by githubUsername in the basicInfo object
    const portfolio = await Portfolio.findOne({ "formData.basicInfo.githubUsername": githubUsername });
console.log(portfolio);

    // Check if portfolio exists
    if (!portfolio) {
      // console.log(portfolio,githubUsername);
      
      return res.status(404).json({ message: "Portfolio not found" });
    }

    
    
    res.status(200).json(portfolio); // Return the found portfolio
  } catch (error) {
    console.log("Error fetching portfolio:", error);
    res.status(500).json({ message: "Failed to fetch portfolio" });
  }
});



module.exports = router;
