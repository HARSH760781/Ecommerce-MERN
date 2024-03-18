const app = require("./app");
const dotenv = require("dotenv");
const DB_Connection = require("./config/db");

//config env
dotenv.config({ path: "backend/config/config.env" });
DB_Connection();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port} successfully!!`);
});
