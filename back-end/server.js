const express = require("express");
const error = require("debug")("api:error");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/sendToMe", require("./routes/sendToMe"));

app.use(express.static(path.join(__dirname, "../front-end/public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/public", "index.html"));
});
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  console.log(err);
  res.send("error");
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`app is live on ${port}`);
});