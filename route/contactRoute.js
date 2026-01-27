// contactRoute.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

console.log("Loading contactRoute:", __filename);

// ----------------------
// Brevo SMTP ENV
// ----------------------
const SMTP_HOST = process.env.SMTP_HOST || "smtp-relay.brevo.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER; // example: 9e8767001@smtp-brevo.com
const SMTP_PASS = process.env.SMTP_PASS; // Brevo SMTP Key
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER;
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_FROM;

// ----------------------
// Nodemailer Transport
// ----------------------
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // MUST be false for 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Render safe
  },
});

// Verify SMTP
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ SMTP Error:", err);
  } else {
    console.log("✅ SMTP Ready");
  }
});

// ----------------------
// POST /contact
// ----------------------
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        msg: "Please fill all the fields",
      });
    }

    // Escape HTML
    const esc = (s = "") =>
      String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `
      <div style="font-family: Arial; max-width: 600px">
        <h2>Information</h2>
        <ul>
          <li><b>Name:</b> ${esc(name)}</li>
          <li><b>Email:</b> ${esc(email)}</li>
        </ul>
        <h2>Message</h2>
        <p>${esc(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Contact Form" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Message from ${esc(name)}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html,
    });

    console.log("📧 Mail sent:", info.messageId);

    res.status(200).json({
      msg: "Thank You For Contacting Mr. Sandeep",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      msg: "There is a server error occurred",
    });
  }
});

// ----------------------
// GET /test-email (optional)
// ----------------------
router.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Test Email" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      subject: "Brevo SMTP Test",
      text: "Brevo SMTP test email",
      html: "<p>Brevo SMTP test email</p>",
    });

    res.send("Test email sent successfully.");
  } catch (err) {
    console.error("Test email error:", err);
    res.status(500).send("Test email failed.");
  }
});

module.exports = router;

