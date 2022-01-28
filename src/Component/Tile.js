import React from "react";
import { Color } from "../Utils/colors";

function Tile(props) {
	const { value } = props;
	return (
		<div className="tile4" style={{ background: Color(value).background }}>
			<span className="tile_value" style={{ color: Color(value).color }}>
				{value ? value : ""}
			</span>
		</div>
	);
}

export default Tile;
