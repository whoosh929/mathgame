import Piece from "./Piece.tsx";
import type { numberRanges } from "../constants/types.tsx";
import "../styles/boardStyle.css";
import { getRandomNumber, getRandomImage } from "../utils/randomizer.ts";

function board({ numbers }: { numbers: numberRanges }) {
	//todo: make row and length scaleable
	//<Piece firstNum={getRandomNumber(numbers.firstNumMin, numbers.firstNumMax)} secondNum={getRandomNumber(numbers.secondNumMin, numbers.secondNumMax)} operator="plus" />
	//<Piece firstNum={getRandomNumber(1, 15)} secondNum={getRandomNumber(1, 15)} operator="plus" />
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
									operator="plus"
								/>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default board;
