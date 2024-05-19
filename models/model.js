const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const budgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  limit: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = {
  Expense: mongoose.model("Expense", expenseSchema),
  Budget: mongoose.model("Budget", budgetSchema),
  User: mongoose.model("User", userSchema),
};
