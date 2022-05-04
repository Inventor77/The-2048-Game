import {
	twoAtRandom,
	fourAtRandom,
	eightAtRandom,
	sixteenAtRandom,
	thirtyTwoAtRandom,
	sixtyFourAtRandom,
} from "./randomNumber";

export function conditionalRandomNumber(array) {
	let clone = array;
	const max_element = Math.max(...[].concat(...clone));
	if (max_element <= 16) {
		twoAtRandom(clone);
	} else if (max_element > 16 && max_element <= 64) {
		Math.floor(Math.random() * 2)
			? Math.floor(Math.random() * 2)
				? twoAtRandom(clone)
				: fourAtRandom(clone)
			: twoAtRandom(clone);
	} else if (max_element > 64 && max_element <= 256) {
		Math.floor(Math.random() * 2)
			? Math.floor(Math.random() * 2)
				? Math.floor(Math.random() * 2)
					? twoAtRandom(clone)
					: eightAtRandom(clone)
				: fourAtRandom(clone)
			: fourAtRandom(clone);
	} else if (max_element > 256 && max_element <= 1024) {
		Math.floor(Math.random() * 2)
			? Math.floor(Math.random() * 2)
				? Math.floor(Math.random() * 2)
					? fourAtRandom(clone)
					: sixteenAtRandom(clone)
				: eightAtRandom(clone)
			: eightAtRandom(clone);
	} else if (max_element > 1024 && max_element <= 4096) {
		Math.floor(Math.random() * 2)
			? Math.floor(Math.random() * 2)
				? Math.floor(Math.random() * 2)
					? Math.floor(Math.random() * 2)
						? eightAtRandom(clone)
						: sixtyFourAtRandom(clone)
					: thirtyTwoAtRandom(clone)
				: sixteenAtRandom(clone)
			: sixteenAtRandom(clone);
	}

	return clone;
}
