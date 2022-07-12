const express = require("express");
const router = express.Router();
const TeamModel = require("../models/Teams");

router.get("/getTeams", (req, res) => {
	TeamModel.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

router.get("/getTeam/:id", (req, res) => {
	TeamModel.findOne({ _id: req.params.id }, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

router.get("/getTeamByName/:name", (req, res) => {
	TeamModel.findOne({ name: req.params.name }, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

router.get("/getTeamsByName/:name", (req, res) => {
	TeamModel.find(
		{ name: { $regex: req.params.name, $options: "i" } },
		(err, result) => {
			if (err) {
				res.json(err);
			} else {
				res.json(result);
			}
		}
	);
});

router.get("/getTeamsByPoints/:points", (req, res) => {
	// this is another way to write queries using "where"
	const query = TeamModel.where({ points: req.params.points });
	query.find(function (err, result) {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
	// TeamModel.find(
	// 	{ points: { $regex: req.params.points, $options: "i" } },
	// 	(err, result) => {
	// 		if (err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(result);
	// 		}
	// 	}
	// );
});

router.delete("/deleteTeamByName/:name", (req, res) => {
	// this is another way to write queries using "where"
	const query = TeamModel.where({ name: req.params.name });
	query.findOneAndDelete(function (err, result) {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
	// TeamModel.find(
	// 	{ points: { $regex: req.params.points, $options: "i" } },
	// 	(err, result) => {
	// 		if (err) {
	// 			res.json(err);
	// 		} else {
	// 			res.json(result);
	// 		}
	// 	}
	// );
});

// Update Team
router.put("/updateTeamById/:id", (req, res) => {
	TeamModel.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body,
		},
		(error, data) => {
			if (error) {
				console.log(error);
			} else {
				res.json(data);
				console.log("Team updated successfully !");
			}
		}
	);
});
module.exports = router;
