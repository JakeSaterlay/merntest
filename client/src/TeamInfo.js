import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function TeamInfo() {
	const [team, setTeam] = useState({});
	const [description, setDesctiption] = useState("");

	let params = useParams();

	useEffect(() => {
		Axios.get(`http://localhost:3001/team/getTeam/${params.id}`).then(
			(response) => {
				setTeam(response.data);
			}
		);
	}, []);

	const updateDescription = () => {
		Axios.put(`http://localhost:3001/team/updateTeamById/${params.id}`, {
			description: team.description,
		}).then((response) => {});
	};

	const getValue = (e) => {
		const { name, value } = e.target;
		setTeam({ ...team, [name]: value });
	};

	return (
		<div className="App">
			<div className="teamsDisplay text-2xl">
				Name: {team.name} Points: {team.points} Description: {team.description}
			</div>
			<div>
				Description:
				<input
					type="text"
					value={team.description || ""}
					placeholder="Description"
					name="description"
					onChange={getValue}
				/>
			</div>
			<button onClick={updateDescription}>Update Team</button>
		</div>
	);
}

export default TeamInfo;
