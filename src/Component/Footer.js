import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Footer(props) {
	const { sideLength } = props;
	return (
		<footer className="footer" id="footer">
			<div className="footer_info">
				<span className="highlight_text"> HOW TO PLAY: </span>
				Use your <span className="highlight_text"> arrow keys</span> to move the
				tiles. Tiles with the same number
				<span className="highlight_text"> merge into one </span> when they
				touch. Add them up to reach
				<span className="highlight_text">
					{" "}
					{sideLength === 4 ? 2048 : 4096}!
				</span>
			</div>
			<a href="#header">
				<div className="game_rules highlight_text">
					Start playing <HiOutlineArrowNarrowRight />
				</div>
			</a>
		</footer>
	);
}

export default Footer;
