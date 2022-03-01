const { Blog } = require("../models/blogModels");
const asyncHandler = require("express-async-handler");

const getAllBlogs = (req, res) => {
  Blog.find().then((data) =>
    res.status(200).json({
      messages: "Get all Blog",
      // data: "get all blog",
      data,
    })
  );
};

const SetBlog = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.render(400);
    throw new Error("Please add your text to field");
  }

  console.log(req.body);
  let data = await new Blog(req.body);
  data = await data.save();
  res.status(200).json(data);
});

const GetBlog = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((data) =>
      res.status(200).json({
        message: `Get ${id} Blog`,
        data,
      })
    )
    .catch((err) => console.log(err));
};
const UpdateBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let data = await Blog.findById(id);
  const data_body = req.body;
  if (!req.body) {
    res.render(400);
    throw new Error("Please add your text to field");
  }

  const Updatepost = await Blog.findByIdAndUpdate(data, data_body, {
    new: true,
  });
  res.status(201).json(Updatepost);
});

const DeleteBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const data = await Blog.findById(id);
  if (!data) {
    res.render(400);
    throw new Error("Blog not found");
  }
  await data.remove();

  res.status(200).json({ id: `${id} no longer exist` });
});

module.exports = { getAllBlogs, SetBlog, GetBlog, UpdateBlog, DeleteBlog };
