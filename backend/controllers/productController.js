const Product = require("../models/produceModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
//Create product - Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({ success: true, product });

  next();
});
//Get all Products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product -admin
exports.updateProduct = catchAsyncError(async (req, res) => {
  console.log(req.params.id);
  var product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//Delete project.. - admin
exports.deleteProduct = catchAsyncError(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not Found", 404));
  }
  console.log(product);
  await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    id: req.params.id,
    message: "Deleted Successfully",
  });
});
//get Single Product
exports.getSinglProduct = catchAsyncError(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});
