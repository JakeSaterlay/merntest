import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
function Teams() {
	const [listOfTeams, setListOfTeams] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:3001/team/getTeams").then((response) => {
			setListOfTeams(response.data);
		});
	}, []);

	return (
		<div className="App">
			<div className="teamsDisplay">
				{listOfTeams.map((team) => {
					return (
						<div>
							<Link to={`/teams/${team._id}`}>{team.name}</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Teams;
