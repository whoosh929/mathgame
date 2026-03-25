import type { MathNumbers } from "../constants/types";

function getMathAnswer({ firstNum, secondNum, operator }: MathNumbers): number {
	switch (operator) {
		case "plus":
			return firstNum + secondNum;
		case "minus":
			return firstNum - secondNum;
		case "multiply":
			return firstNum * secondNum;
		case "divide":
			return firstNum / secondNum;
		default:
			return 0;
	}
}

function isCorrect({ firstNum, secondNum, operator }: MathNumbers, inputAnswer: number): Boolean {
	const correctAnswer: number = getMathAnswer({
		firstNum,
		secondNum,
		operator,
	});

	if (correctAnswer == inputAnswer) {
		return true;
	} else {
		return false;
	}
}
export { isCorrect };
