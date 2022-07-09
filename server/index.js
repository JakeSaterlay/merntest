const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const userRoute = require("./Routes/User");
const teamRoute = require("./Routes/Team");

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/team", teamRoute);

//hello
mongoose.connect(
	"mongodb+srv://user123:Password123Tech@merntest.mlyjcof.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.listen(3001, () => {
	console.log("SERVER RUNS PERFECTLY!");
});
