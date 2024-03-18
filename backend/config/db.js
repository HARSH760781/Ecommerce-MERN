const mongoose = require("mongoose");

// const url = process.env.uri;
// console.log(url);
const connection = () => {
  mongoose
    .connect(process.env.uri)
    .then((data) =>
      console.log(`Connected to MongoDB at ${data.connection.host}`)
    )
    .catch((e) => console.log(e));
};

module.exports = connection;
