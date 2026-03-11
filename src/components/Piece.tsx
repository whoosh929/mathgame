import { useState } from "react";
import type { MathNumbers } from "../constants/types";
import { isCorrect } from "../utils/mathlogic";
import { operatorMap } from "../constants/interface";
import "../styles/math.css";

function Piece({ firstNum, secondNum, operator = "plus" }: MathNumbers) {
	const [visible, setVisibility] = useState(true);
	const [answer, setAnswer] = useState("");
	const [focus, setFocus] = useState(false);
	const [wrongAnimation, setWrongAnimation] = useState(false);

	//lifecycle hooks
	const handleAnimationEnd = () => {
		setWrongAnimation(false);
	};

	function replaceOperators(str: string): string {
		return str.replace(/\b(plus|minus|multiply)\b/g, (match) => operatorMap[match]);
	}

	function toggleVisibility() {
		setVisibility(!visible);
		console.log("Visibility set to: " + visible);
	}

	function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == "Enter") {
			if (isCorrect({ firstNum, secondNum, operator }, Number(answer))) {
				toggleVisibility();
			}
			setAnswer("");
		}
	}
	function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		setAnswer(e.target.value);
	}

	return (
		<>
			<div className="piece">
				<div className={`piece ${visible ? "show" : "hidden"}`}>
					<span className="firstNum">{firstNum}</span>
					<br /> {replaceOperators(operator)}
					<span className="secondNum">{secondNum}</span> <br />
					<input
						className={`answerTextbox ${focus ? "" : "highlight"}`}
						type="text"
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						onKeyUp={handleKeyUp}
						value={answer}
						onChange={handleTextChange}
					/>
				</div>
			</div>
		</>
	);
}
export default Piece;
