const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 2000;

const { Blog } = require("./models/blogModels");

const blogRoutes = require("./routes/blogRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("saib");
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/newWay")
  .then((result) => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/blog/", blogRoutes);

app.get("/test", (req, res) => {
  const blog = new Blog({
    name: "Habeeb",
    title: "Mars and Other Planets",
    description: "best team",
  });

  blog
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(port);
});
