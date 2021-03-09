import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.post("/", async (req, res) => {
  try {
    const { name, subject, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: process.env.EMAIL_TO, // list of receivers
      subject: `${subject}`, // Subject line
      html: `
      <h3>Customer Info</h3>
      <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
      
      `, // html body
    });

    res.json("Message has been sent.");
  } catch (error) {
    console.log(error);
  }
});

if (process.env.NODE_ENV === "production") {
  const root = path.join("frontend", "build");
  //console.log(root);
  app.use(express.static(root));

  app.get("*", (req, res) => res.sendFile("index.html", { root }));
} else {
  app.get("/", (req, res) => res.send("API is running..."));
}

app.listen(PORT, () => console.log(`Portfolio running on port ` + PORT));
