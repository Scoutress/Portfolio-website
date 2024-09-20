import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Message from "./src/models/Message.js";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  console.log(`Received message from ${name} (${email}) with IP: ${userIp}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  try {
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });
    await newMessage.save();

    res.status(200).send("Message saved");
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send("Error saving message");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
