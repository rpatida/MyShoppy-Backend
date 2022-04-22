const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

//import all routes
const user = require("./routes/user");
const product = require("./routes/product");
const order = require("./routes/order");

// setting dotenv
dotenv.config({ path: "config/config.env" });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/v1", user);
app.use("/v1", product);
app.use("/v1", order);

const dbconnection = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    .then((cons) => {
      console.log(
        `MongoDB Database connected with HOST: ${cons.connection.host}`
      );
    });
};

dbconnection();

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
