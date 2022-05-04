// Function return false if there is no Zeros in array
export function ifZero(array) {
	let zCnt = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i][j] === 0) zCnt++;
		}
	}
	return zCnt ? true : false;
}
