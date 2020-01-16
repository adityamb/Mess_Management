
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const messcuts = require("./routes/api/messcuts");
// const carts = require("./routes/api/carts");
// const orders = require("./routes/api/orders");
// const delivery = require("./routes/api/delivery")


const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

// Use routes
app.use("/api/users", users);
app.use("/api/messcuts", messcuts);
// app.use("/api/carts", carts);
// app.use("/api/orders", orders);
// app.use("/api/delivery",delivery)

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server Running on port ${port}`));