const config = require("./utils/config");
const logger = require("./utils/logger");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
require("express-async-errors");

const contactFormsRouter = require("./controllers/contactForms");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const downloadsRouter = require("./controllers/downloads");
const { errorHandler, userExtractor } = require("./utils/middleware");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use("/api/login", loginRouter);
app.use("/api/contactforms", userExtractor, contactFormsRouter);
app.use("/api/users", usersRouter);
app.use("/api/downloads", downloadsRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use(errorHandler);

module.exports = app;
