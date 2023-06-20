const mongoose = require("mongoose");

const schema = mongoose.Schema({
  embedUrl: {
    type: String,
    required: true,
  },
  thumbnailImageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    default: 0,
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const TechContent = mongoose.model("TechContent", schema);

module.exports = TechContent;
