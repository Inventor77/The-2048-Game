import React, { useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useLocalStorage } from "../Utils/useLocalStorage";

function Header(props) {
	const { score, newGame, tryNewGame } = props;
	const [bestScore, setBestScore] = useLocalStorage("bestScore", 0);

	useEffect(() => {
		setBestScore(Math.max(score, bestScore));
	}, [Math.max(score, bestScore)]);
	return (
		<header className="header" id="header">
			<div className="header_left">
				<div className="header_title highlight_text">2048</div>
				<div className="header_subtitle">
					<div>
						Join the tiles, get to
						<span className="highlight_text"> 2048! </span>
					</div>
					<a href="#footer">
						<div className="game_rules highlight_text">
							How to play{" "}
							<HiOutlineArrowNarrowRight style={{ fontWeight: "lighter" }} />
						</div>
					</a>
				</div>
			</div>
			<div className="header_right">
				<div className="score_board">
					<div className="score">
						<span className="score_head">SCORE</span>
						<span className="score_value"> {score} </span>
					</div>
					<div className="score">
						<span className="score_head">BEST</span>
						<span className="score_value"> {bestScore} </span>
					</div>
				</div>
				<div className="btn_container">
					<button
						className="action_btn"
						onClick={() => {
							tryNewGame(!newGame);
						}}
					>
						New Game
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
