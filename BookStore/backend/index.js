import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World");
});
//Route for saving a new book

app.post("./books", async (req, res) => {
  try {
    if (!req.body.title || !req.bbody.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "Send allrequired fields: title,author,publishYear" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
