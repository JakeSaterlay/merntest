import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "./Teams";
import TeamInfo from "./TeamInfo";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Teams />} />
				<Route path="teams/:id" element={<TeamInfo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
