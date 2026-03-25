import Piece from "./Piece.tsx";
import type { boardProps } from "../constants/interface.tsx";
import "../styles/boardStyle.css";
import { getRandomNumber } from "../utils/randomizer.ts";

function Board({ numbers, op }: boardProps) {
	//todo: make row and length scaleable, make operator carry over as setting
	console.log("Board entry - op:" + op);

	return (
		<table id="tableBoard">
			<tbody>
				{Array.from({ length: 3 }).map((_, row) => (
					<tr key={row}>
						{Array.from({ length: 4 }).map((_, col) => (
							<td key={`${row}-${col}`}>
								<Piece
									firstNum={getRandomNumber(numbers.firstNumMin, numbers.firstNumMax)}
									secondNum={getRandomNumber(numbers.secondNumMin, numbers.secondNumMax)}
									operator={op}
								/>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Board;
