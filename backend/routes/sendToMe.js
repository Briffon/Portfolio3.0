const express = require("express");
const sendToMeRouter = express.Router();
const nodemailer = require("nodemailer");
const nodeoutlook = require("nodejs-nodemailer-outlook");

const transport = {
  //all of the configuration for making a site send an email.
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log("users ready to mail myself");
  }
});

sendToMeRouter.get("/", (req, res, next) => {
  console.log("test");
});

sendToMeRouter.post("/", (req, res, next) => {
  //make mailable object
  const mail = {
    from: req.body.email,
    to: process.env.THE_EMAIL,
    subject: req.body.subject,
    text: `
      from:
      ${req.body.name} 
      contact: ${req.body.email}
      subject:${req.body.subject}
      message: 
      ${req.body.text}`,
  };
  console.log(mail);
  nodeoutlook.sendEmail({
    auth: {
      user: "btsmith@digitalbyte.io",
      pass: process.env.THE_PASSWORD,
    },
    from: req.body.name,
    to: "btsmith@digitalbyte.io",
    subject: "[PORTFOLIO CONTACT FORM]",
    html: `
    <div style="display: flex;flex-direction: row;">
        <h1>Portfolio Submission</h1>
        <p>First Name: ${req.body.formInfo.fname}</p>
        <p>Last Name: ${req.body.formInfo.lname}</p>
        <p>Email: ${req.body.formInfo.email}</p>
        <p>Company: ${req.body.formInfo.company}</p>
        <p>Message: ${req.body.formInfo.message}</p>
    </div>
    `,
    text: `
    from: ${req.body.name}
    contact: ${req.body.email}
    subject: ${req.body.subject}
    message: ${req.body.text}
    `,
  });
});

module.exports = sendToMeRouter;
