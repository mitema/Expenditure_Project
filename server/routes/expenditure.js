//server/routes/expenditure.js
const expenditurecontroller = require("../controllers/expenditure.ctrl");
module.exports = (router) => {
	router	
	   .get('/curent')
	   .get(expenditurecontroller.getCurrent)
}
