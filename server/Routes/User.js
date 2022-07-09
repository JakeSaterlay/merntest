const express = require("express");
const router = express.Router();
const UserModel = require("../models/Users");

router.get("/getUsers", (req, res) => {
	UserModel.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

router.post("/createUser", async (req, res) => {
	const user = req.body;
	const newUser = new UserModel(user);
	await newUser.save();

	res.json(user);
});

module.exports = router;
