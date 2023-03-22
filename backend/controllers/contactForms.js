const router = require("express").Router();
const nodemailer = require("nodemailer");
const ContactForm = require("../models/contactForm");

router.get("/", async (request, response) => {
  const contactForms = await ContactForm.find({});

  response.json(contactForms);
});

router.post("/", async (request, response) => {
  const contactForm = new ContactForm({ ...request.body });

  const savedContactForm = await contactForm.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: "New contact form submission",
    html: `
      <p>Email: ${request.body.email}</p>
      <p>Message: ${request.body.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  response.status(201).json(savedContactForm);
});

module.exports = router;
