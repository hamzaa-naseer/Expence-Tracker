const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const userRoute = require("./routes/users/usersRoute");
const app = express();
dotenv.config();
dbConnect();

app.use(express.json());

//base url
app.use("/api/users", userRoute);

//Error
app.use(notFound);
app.use(errorHandler);

module.exports = app;
