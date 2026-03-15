import Piece from "./Piece.tsx";
import "../styles/boardStyle.css";
import { getRandomNumber, getRandomImage } from "../utils/randomizer.ts";

function board() {
	const imageURL: string = getRandomImage();

	//todo: make row and length scaleable
	return (
		<table id="tableBoard">
			<tbody>
				{Array.from({ length: 3 }).map((_, row) => (
					<tr key={row}>
						{Array.from({ length: 4 }).map((_, col) => (
							<td key={`${row}-${col}`}>
								<Piece firstNum={getRandomNumber(1, 5)} secondNum={getRandomNumber(1, 5)} operator="multiply" />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default board;
