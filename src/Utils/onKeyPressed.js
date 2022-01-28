import { addElements } from "./addElements";
import { transpose } from "./Transpose";

// Function on invoked on Left Key Pressed
export const onLeftKeyPressed = (array) => {
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
	console.log("left", newClone);
};

// Function on invoked on Right Key Pressed
export const onRightKeyPressed = (array) => {
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
	console.log("right", newClone);
};

// Function on invoked on Up Key Pressed
export const onUpKeyPressed = (array) => {
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
	console.log("up", newClone);
};

// Function on invoked on Down Key Pressed
export const onDownKeyPressed = (array) => {
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
	console.log("down", newClone);
};
