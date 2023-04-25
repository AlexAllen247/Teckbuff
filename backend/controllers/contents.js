const router = require("express").Router();
const Content = require("../models/content");

router.get("/", async (request, response) => {
  try {
    const content = await Content.find({});
    response.json(content);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (request, response) => {
  try {
    const contents = new Content({ ...request.body });
    const savedContent = await contents.save();
    response.status(201).json(savedContent);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
