const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const incomeRoute = require("./route/income/income");
const expenseRoute = require("./route/expense/expense");
const accountStatsRoute = require("./route/stats/stats");

dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.json({
    app: "Expenses-Tracker",
  });
});

dbConnect();

app.use(express.json());

app.use(cors());

app.use("/api/users", userRoutes);

app.use("/api/incomes", incomeRoute);

app.use("/api/expenses", expenseRoute);

app.use("/api/stats", accountStatsRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
