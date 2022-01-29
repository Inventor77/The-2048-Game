import { addElements } from "./addElements";
import { transpose } from "./Transpose";
import { conditionalRandomNumber } from "./conditionalRandomNumber";

// Function invoked on Left Key Pressed
export function onLeftKeyPressed(array) {
	// let clone = array;
	let clone = [
		[0, 0, 4, 4],
		[4, 3, 0, 4],
		[2, 2, 2, 2],
		[2, 2, 2, 0],
	];
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			true
		);
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return noZeroElements.concat(zeroElements);
	});
	newClone = conditionalRandomNumber(newClone);
	console.log("left", newClone);
}

// Function invoked on Right Key Pressed
export function onRightKeyPressed(array) {
	// let clone = array;
	let clone = [
		[0, 0, 4, 4],
		[4, 3, 0, 4],
		[2, 2, 2, 2],
		[2, 2, 2, 0],
	];
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			false
		);
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return zeroElements.concat(noZeroElements);
	});
	newClone = conditionalRandomNumber(newClone);
	console.log("right", newClone);
}

// Function invoked on Up Key Pressed
export function onUpKeyPressed(array) {
	// let clone = array;
	let clone = [
		[0, 0, 4, 4],
		[4, 3, 0, 4],
		[2, 2, 2, 2],
		[2, 2, 2, 0],
	];

	// [0, 4, 2, 2]
	// [0, 3, 2, 2]
	// [4, 0, 2, 2]
	// [4, 4, 2, 0]

	clone = transpose(clone);
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			true
		);
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return noZeroElements.concat(zeroElements);
	});
	newClone = transpose(newClone);
	newClone = conditionalRandomNumber(newClone);
	console.log("up", newClone);
}

// Function invoked on Down Key Pressed
export function onDownKeyPressed(array) {
	// let clone = array;
	let clone = [
		[0, 0, 4, 4],
		[4, 3, 0, 4],
		[2, 2, 2, 2],
		[2, 2, 2, 0],
	];

	// [0, 4, 2, 2]
	// [0, 3, 2, 2]
	// [4, 0, 2, 2]
	// [4, 4, 2, 0]

	clone = transpose(clone);
	let newClone = clone.map((row) => {
		let noZeroElements = addElements(
			row.filter((elem) => elem),
			false
		);
		let zeroElements = [];
		for (let i = 0; i < row.length - noZeroElements.length; i++)
			zeroElements.push(0);
		return zeroElements.concat(noZeroElements);
	});
	newClone = transpose(newClone);
	newClone = conditionalRandomNumber(newClone);
	console.log("down", newClone);
}
