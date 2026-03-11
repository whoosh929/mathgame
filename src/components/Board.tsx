import Piece from "./Piece.tsx";
import "../styles/boardStyle.css";
import { getRandomNumber, getRandomImage } from "../utils/randomizer.ts";

function board() {
	const imageURL: string = getRandomImage();

	return (
		<table id="tableBoard">
			<tbody>
				{Array.from({ length: 3 }).map((_, row) => (
					<tr key={row}>
						{Array.from({ length: 4 }).map((_, col) => (
							<td key={`${row}-${col}`}>
								<Piece firstNum={getRandomNumber(0, 10)} secondNum={getRandomNumber(0, 10)} operator="plus" />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default board;
