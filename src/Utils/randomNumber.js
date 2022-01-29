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

// Function for generating a number 8 at Random Places
export function eightAtRandom(arr) {
	const x = Math.floor(Math.random() * arr.length);
	const y = Math.floor(Math.random() * arr.length);
	arr[x][y] === 0 ? (arr[x][y] = 8) : eightAtRandom(arr);
}

// Function for generating a number 16 at Random Places
export function sixteenAtRandom(arr) {
	const x = Math.floor(Math.random() * arr.length);
	const y = Math.floor(Math.random() * arr.length);
	arr[x][y] === 0 ? (arr[x][y] = 16) : sixteenAtRandom(arr);
}

// Function for generating a number 32 at Random Places
export function thirtyTwoAtRandom(arr) {
	const x = Math.floor(Math.random() * arr.length);
	const y = Math.floor(Math.random() * arr.length);
	arr[x][y] === 0 ? (arr[x][y] = 32) : thirtyTwoAtRandom(arr);
}

// Function for generating a number 64 at Random Places
export function sixtyFourAtRandom(arr) {
	const x = Math.floor(Math.random() * arr.length);
	const y = Math.floor(Math.random() * arr.length);
	arr[x][y] === 0 ? (arr[x][y] = 64) : sixtyFourAtRandom(arr);
}
