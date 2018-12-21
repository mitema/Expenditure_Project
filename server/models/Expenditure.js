//server/models/Expenditure.js
const mongoose = require("mongoose");

let ExpenditureSchema = new mongoose.Schema(
	{
		entertainment: String,
		utilities: String,
		groceries : String,
		eatingOut : String,
		feesInterest : String,
		education : String,
		shopping : String,
		transport : String,
		donations : String,
		uncategorised : String,
		cash : String,
		travel : String,
		health : String,
		taxPaid : String,
		date: String
	}
);
module.exports = mongoose.model("Expenditure", ExpenditureSchema);
