const router = require("express").Router();
const PortfolioItem = require("../models/portfolioItem");

router.get("/", async (request, response) => {
  try {
    const portfolioItems = await PortfolioItem.find({});
    response.json(portfolioItems);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve portfolio items." });
  }
});

router.post("/", async (request, response) => {
  try {
    const newPortfolioItem = new PortfolioItem({ ...request.body });

    const savedPortfolioItem = await newPortfolioItem.save();
    response.status(201).json(savedPortfolioItem);
  } catch (error) {
    response.status(500).json({ error: "Failed to save the portfolio item" });
  }
});

module.exports = router;
