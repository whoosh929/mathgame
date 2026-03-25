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
	const [mathOperator, setMathOperator] = useState("plus");
	const numberRange: numberRanges = { firstNumMin, firstNumMax, secondNumMin, secondNumMax };

	function setNewNumbers(newNumbers: numberRanges, newOperator: string): void {
		setFirstNumMin(newNumbers.firstNumMin);
		setFirstNumMax(newNumbers.firstNumMax);
		setSecondNumMin(newNumbers.secondNumMin);
		setSecondNumMax(newNumbers.secondNumMax);

		setMathOperator(newOperator);
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
		console.log("newOperator:" + newOperator);
	}

	return (
		<>
			<table>
				<tbody>
					<tr className="Board">
						<td>
							<Board numbers={numberRange} op={mathOperator} />
						</td>
					</tr>
					<tr className="settings">
						<td>
							<Settings numbers={numberRange} setSettings={setNewNumbers} operator={mathOperator} />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default App;
