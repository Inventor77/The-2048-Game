import { ifSameConsecutive } from "./ifSameConsecutive";
import { ifZero } from "./ifZero";
import { transpose } from "./Transpose";

export function checkGameStatus(arr) {
	let array = arr;
	return (
		ifSameConsecutive(array) ||
		ifSameConsecutive(transpose(array)) ||
		!~ifZero(array)
	);
}
