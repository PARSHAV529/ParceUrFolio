import React, { useState, useEffect } from "react";

const Download = () => {
  const [portfolioData, setPortfolioData] = useState(null);  // To store the fetched portfolio data
  const [githubUsername, setGithubUsername] = useState("");  // To capture the githubUsername input
  const [error, setError] = useState("");  // To handle errors

  // Function to fetch the portfolio data by githubUsername
  const fetchPortfolio = async () => {
    if (githubUsername) {
      try {
        console.log(githubUsername);
        
        const response = await fetch(`http://localhost:5000/api/portfolio/github/${githubUsername}`);

        if (!response.ok) {
          throw new Error("Portfolio not found");
        }

        const data = await response.json();
        setPortfolioData(data);  // Set the fetched portfolio data
        setError("");  // Clear error message if successful
      } catch (err) {
        setError(err.message);  // Set error message if something goes wrong
        setPortfolioData(null);  // Clear any previous data
      }
    }
  };

  // Button handler to initiate the fetch on button click
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPortfolio();
  };

  return (
    <div>
      <h1>Find Portfolio by GitHub Username</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
        />
        <button type="submit">Get Portfolio</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}
      
      {portfolioData && (
        <div>
          <h2>Portfolio Details</h2>
          <p><strong>Name:</strong> {portfolioData.basicInfo.name}</p>
          <p><strong>Email:</strong> {portfolioData.basicInfo.email}</p>
          <p><strong>GitHub Username:</strong> {portfolioData.basicInfo.githubUsername}</p>
          {/* Display more portfolio data as needed */}
        </div>
      )}
    </div>
  );
};

export default Download;
