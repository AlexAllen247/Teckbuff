const mongoose = require("mongoose");

const portfolioItemSchema = new mongoose.Schema({
  iframeUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  githubUrl: {
    type: String,
    required: false, // Optional field
  },
  liveSiteUrl: {
    type: String,
    required: true,
  },
});

portfolioItemSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const PortfolioItem = mongoose.model("PortfolioItem", portfolioItemSchema);

module.exports = PortfolioItem;
