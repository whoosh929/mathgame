import "./styles/App.css";
import "./styles/settings.css";

import Board from "./components/Board";
import Settings from "./components/settings";

function App() {
	return (
		<>
			<table>
				<td>
					<tr className="Board">
						<Board />
					</tr>
					<tr className="settings">
						<Settings />
					</tr>
				</td>
			</table>
		</>
	);
}

export default App;
