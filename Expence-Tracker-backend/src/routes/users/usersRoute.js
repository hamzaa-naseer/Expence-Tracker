const express = require("express");
const {
  registerUser,
  getUsersData,
} = require("../../controllers/users/usersController");

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.get("/", getUsersData);
module.exports = userRoute;
