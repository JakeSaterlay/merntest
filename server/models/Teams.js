const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	points: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const TeamModel = mongoose.model("teams", TeamSchema);

module.exports = TeamModel;
