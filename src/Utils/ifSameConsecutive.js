// Function return false if there is no Same Consecutive in array
export function ifSameConsecutive(array) {
	let cnt = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[i][j] === array[i][j + 1]) cnt++;
		}
	}
	return cnt ? true : false;
}
