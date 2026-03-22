import "./styles/App.css";
import "./styles/settings.css";

import Board from "./components/Board";
import Settings from "./components/settings";
import { useState } from "react";
import type { numberRanges } from "./constants/types";

function App() {
	const [firstNumMin, setFirstNumMin] = useState(0);
	const [firstNumMax, setFirstNumMax] = useState(10);
	const [secondNumMin, setSecondNumMin] = useState(0);
	const [secondNumMax, setSecondNumMax] = useState(10);
	const numberRange: numberRanges = { firstNumMin, firstNumMax, secondNumMin, secondNumMax };

	function setNewNumbers(newNumbers: numberRanges): void {
		setFirstNumMin(newNumbers.firstNumMin);
		setFirstNumMax(newNumbers.firstNumMax);
		setSecondNumMin(newNumbers.secondNumMin);
		setSecondNumMax(newNumbers.secondNumMax);
		console.log(
			"setting numbers: [" +
				newNumbers.firstNumMin +
				"," +
				newNumbers.firstNumMax +
				"], [" +
				newNumbers.secondNumMin +
				"," +
				newNumbers.secondNumMax +
				"]",
		);
	}

	return (
		<>
			<table>
				<tbody>
					<tr className="Board">
						<td>
							<Board numbers={numberRange} />
						</td>
					</tr>
					<tr className="settings">
						<td>
							<Settings numbers={numberRange} setSettings={setNewNumbers} />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default App;
