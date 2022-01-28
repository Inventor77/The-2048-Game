import {
	onLeftKeyPressed,
	onRightKeyPressed,
	onUpKeyPressed,
	onDownKeyPressed,
} from "./onKeyPressed";

const left = 37;
const up = 38;
const right = 39;
const down = 40;

const handleKeyEvent = (event) => {
	// if (gameOver) {
	// 	return;
	// }
	switch (event.keyCode) {
		case left:
			onLeftKeyPressed();
			break;
		case up:
			onUpKeyPressed();
			break;
		case right:
			onRightKeyPressed();
			break;
		case down:
			onDownKeyPressed();
			break;
		default:
			break;
	}
};

export default handleKeyEvent;
