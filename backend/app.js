const config = require("./utils/config");
const logger = require("./utils/logger");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");
require("express-async-errors");

const contactFormsRouter = require("./controllers/contactForms");
const techContentsRouter = require("./controllers/techContents");
const { errorHandler, setPermissionsPolicy } = require("./utils/middleware");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://www.google-analytics.com/"],
      scriptSrc: [
        "'self'",
        "https://code.jquery.com",
        "https://cdn.jsdelivr.net",
        "https://maxcdn.bootstrapcdn.com",
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://ssl.google-analytics.com",
        "'unsafe-inline'",
        ,
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://maxcdn.bootstrapcdn.com",
      ],
      imgSrc: [
        "'self'",
        "https://www.google-analytics.com",
        "www.google-analytics.com",
        "https://stats.g.doubleclick.net",
        "https://media.licdn.com",
      ],
      frameSrc: [
        "'self'",
        "https://www.linkedin.com",
        "https://www.googletagmanager.com",
      ],
      connectSrc: [
        "'self'",
        "https://region1.google-analytics.com",
        "https://www.google-analytics.com",
        "www.google-analytics.com",
        "https://stats.g.doubleclick.net",
      ],
    },
  }),
);

app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  }),
);

app.use(helmet.noSniff());
app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
app.use(setPermissionsPolicy);
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/contactforms", contactFormsRouter);
app.use("/api/techcontents", techContentsRouter);

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use(errorHandler);

module.exports = app;
