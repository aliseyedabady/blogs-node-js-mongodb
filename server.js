const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const blogsRoutes = require("./routes/blogs");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/blog", blogsRoutes);
console.log("dw", process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on  http://localhost:${process.env.PORT}`);
});
