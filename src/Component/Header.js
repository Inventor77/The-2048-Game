import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Header() {
  return (
    <header>
      <div className="header_left">
        <div className="header_title">2048</div>
        <div className="header_subtitle">
          <div>
            Join the tiles, get to
            <span className="highlight_text"> 2048 </span>
          </div>
          <div className="game_rules highlight_text">
            How to play <HiOutlineArrowNarrowRight />{" "}
          </div>
        </div>
      </div>
      <div className="header_right">
        <div className="score_board">
          <div className="score">
            SCORE
            <span className="score_value"> 3100</span>
          </div>
          <div className="score">
            BEST
            <span className="score_value">3100 </span>
          </div>
        </div>
        <button className="action_btn">New Game</button>
      </div>
    </header>
  );
}

export default Header;
