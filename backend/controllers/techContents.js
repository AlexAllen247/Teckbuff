const router = require("express").Router();
const TechContent = require("../models/techContent");

router.get("/", async (request, response) => {
  try {
    const techContents = await TechContent.find({});
    response.json(techContents);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve articles" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newTechContent = new TechContent({ ...request.body });

    const savedTechContent = await newTechContent.save();
    response.status(201).json(savedTechContent);
  } catch (error) {
    response.status(500).json({ error: "Failed to save the article" });
  }
});

module.exports = router;
