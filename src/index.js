const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("hola bienvenido al curso node.js");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("se conecto al base de datos "))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("servidor conectado", port));
