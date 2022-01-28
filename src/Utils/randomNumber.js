// Function for generating a number 2 at Random Places
export function twoAtRandom(arr) {
	const x = Math.floor(Math.random() * arr.length);
	const y = Math.floor(Math.random() * arr.length);
	arr[x][y] === 0 ? (arr[x][y] = 2) : twoAtRandom(arr);
}

// Function for generating a number 4 at Random Places
export function fourAtRandom(arr) {
	const x = Math.floor(Math.random() * arr.length);
	const y = Math.floor(Math.random() * arr.length);
	arr[x][y] === 0 ? (arr[x][y] = 4) : fourAtRandom(arr);
}
