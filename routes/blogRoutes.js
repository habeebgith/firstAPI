const express = require("express");

const blogRoutes = express.Router();

const {
  getAllBlogs,
  SetBlog,
  GetBlog,
  UpdateBlog,
  DeleteBlog,
} = require("../controller/blogController");

blogRoutes.get("/", getAllBlogs);
blogRoutes.get("/:id", GetBlog);
blogRoutes.post("/create", SetBlog);
blogRoutes.patch("/:id", UpdateBlog);
blogRoutes.delete("/:id", DeleteBlog);

module.exports = blogRoutes;
