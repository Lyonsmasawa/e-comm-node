const express = require("express");
const dotenv = require("dotenv");
const moongoose = require("mongoose");
const app = express();
const cors = require("cors");

const productRouter = require("./routes/products");
const port = 3000;

dotenv.config();
moongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
