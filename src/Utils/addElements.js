export function addElements(array, left) {
	let dummy = array;
	let dummyScore = 0;
	if (left) {
		for (let i = 0; i < dummy.length - 1; i++) {
			if (dummy[i] === dummy[i + 1]) {
				dummy[i] = 2 * dummy[i];
				dummy[i + 1] = 0;
				dummyScore += dummy[i];
			}
		}
	} else {
		for (let i = dummy.length - 1; i >= 1; i--) {
			if (dummy[i] === dummy[i - 1]) {
				dummy[i] = 2 * dummy[i];
				dummy[i - 1] = 0;
				dummyScore += dummy[i];
			}
		}
	}
	return [dummy.filter((elem) => elem), dummyScore];
}
