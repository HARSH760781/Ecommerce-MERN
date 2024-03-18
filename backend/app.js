const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Routes import...
const products = require("./routes/productRoutes");

app.use("/api/v1", products);

//middleware...
app.use(errorMiddleware);

module.exports = app;
