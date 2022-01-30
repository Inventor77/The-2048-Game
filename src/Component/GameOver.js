import React from "react";

function GameOver(props) {
	const { tryAgain, playAgain } = props;
	return (
		<div className="gameOver_container">
			<span className="message">Game over!</span>
			<div className="btn_container">
				<button
					onClick={() => {
						tryAgain();
						playAgain(false);
					}}
					className="action_btn"
				>
					Try again
				</button>
			</div>
		</div>
	);
}

export default GameOver;
