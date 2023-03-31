const router = require("express").Router();
const Video = require("../models/video");

router.get("/", async (request, response) => {
  try {
    const videos = await Video.find({});
    response.json(videos);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (request, response) => {
  try {
    const video = new Video({ ...request.body });
    const savedVideo = await video.save();
    response.status(201).json(savedVideo);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
