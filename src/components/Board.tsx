import Piece from "./Piece.tsx";
import type { boardProps } from "../constants/interface.tsx";
import "../styles/boardStyle.css";
import { getRandomNumber } from "../utils/randomizer.ts";
import { useState, useEffect } from "react";

function Board({ numbers, op }: boardProps) {
	//todo: make row and length scaleable, make operator carry over as setting
	console.log("Board entry - op:" + op);

	//these gen functions are a shittier way to allow for clean divisor numbers
	function genFirstNumber({ numbers, op }: boardProps): number {
		const num = getRandomNumber(numbers.firstNumMin, numbers.firstNumMax);
		return num;
	}

	function genSecondNumber({ numbers, op }: boardProps, firstNum?: number): number {
		let num = 0;

		if (op == "divide") {
			num = getRandomNumber(numbers.secondNumMin, numbers.secondNumMax, firstNum);
		} else {
			num = getRandomNumber(numbers.secondNumMin, numbers.secondNumMax);
		}
		return num;
	}
	// Generate numbers for each piece individually
	const generateNumberPair = () => {
		const first = genFirstNumber({ numbers, op });
		const second = genSecondNumber({ numbers, op }, first);
		return { first, second };
	};

	return (
		<table id="tableBoard">
			<tbody>
				{Array.from({ length: 3 }).map((_, row) => (
					<tr key={row}>
						{Array.from({ length: 4 }).map((_, col) => {
							const { first, second } = generateNumberPair();
							return (
								<td key={`${row}-${col}`}>
									<Piece firstNum={first} secondNum={second} operator={op} />
								</td>
							);
						})}
					</tr>
				))}
			</tbody>
		</table>
	);
}

/*
	return (
		<table id="tableBoard">
			<tbody>
				{Array.from({ length: 3 }).map((_, row) => (
					<tr key={row}>
						{Array.from({ length: 4 }).map((_, col) => (
						
							return(
							<td key={`${row}-${col}`}>
								<Piece firstNum={first} secondNum={second} operator={op} />
							</td>;
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}*/

export default Board;
