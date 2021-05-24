const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const whitelist = ["https://btsmithdev.com/api"];

app.use("/api/sendToMe", require("./routes/sendToMe"));
router.get("/api", (req, res) => {
  res.send("API Version 1.0 is running.");
});

app.use(express.static(path.join(__dirname, "../front-end/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/build", "index.html"));
});
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  console.log(err);
  res.send("error");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../front-end/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../front-end/build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log(`app is live on ${port}`);
});

module.exports = router;
