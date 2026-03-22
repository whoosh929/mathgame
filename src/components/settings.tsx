import type { numberRanges } from "../constants/types";

import type { settingValues } from "../constants/interface";
import { useState } from "react";
import "../styles/settings.css";

function settings({ numbers, setSettings }: settingValues) {
	const [tempFirstNumMin, settempFirstNumMin] = useState(numbers.firstNumMin);
	const [tempFirstNumMax, settempFirstNumMax] = useState(numbers.firstNumMax);
	const [tempSecondNumMin, settempSecondNumMin] = useState(numbers.secondNumMin);
	const [tempSecondNumMax, settempSecondNumMax] = useState(numbers.secondNumMax);

	function update() {
		let temp: numberRanges = {
			firstNumMin: tempFirstNumMin,
			firstNumMax: tempFirstNumMax,
			secondNumMin: tempSecondNumMin,
			secondNumMax: tempSecondNumMax,
		};
		setSettings(temp);
	}

	return (
		<>
			<div className="form-row">
				<label>
					Mode:{" "}
					<select>
						<option>Plus</option>
						<option>Minus</option>
						<option>Multiply</option>
					</select>
				</label>

				<fieldset>
					<legend className="headerText1">First Number:</legend>
					Min:{" "}
					<input
						type="number"
						className="numText"
						value={tempFirstNumMin}
						onChange={(e) => settempFirstNumMin(Number(e.target.value))}
					/>
					Max:{" "}
					<input
						type="number"
						className="numText"
						value={tempFirstNumMax}
						onChange={(e) => settempFirstNumMax(Number(e.target.value))}
					/>
				</fieldset>

				<fieldset>
					<legend className="headerText1">Second Number:</legend>
					Min:{" "}
					<input
						type="number"
						className="numText"
						value={tempSecondNumMin}
						onChange={(e) => settempSecondNumMin(Number(e.target.value))}
					/>
					Max:{" "}
					<input
						type="number"
						className="numText"
						value={tempSecondNumMax}
						onChange={(e) => settempSecondNumMax(Number(e.target.value))}
					/>
				</fieldset>
				<button onClick={update}>Apply</button>
			</div>
		</>
	);
}

export default settings;
