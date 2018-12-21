//server/controllers/expenditure.ctrl.js
const Expenditure = require("./../models/Expenditure");
const fs  = require("fs");

module.exports = {
	getCurrentExpenditure:(req,res,next) => {
		Expenditure.findById(req.params.id, function(err,expenditure)
		{
			if(err)
			   res.send(err);
			else if(!expenditure){
			   res.send(404);
			}
			else{
				res.send(expenditure );
				next();
			}
		});
	}
}
