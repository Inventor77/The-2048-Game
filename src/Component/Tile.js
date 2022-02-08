import React from "react";
import { Color } from "../Utils/colors";

function Tile(props) {
	const { value, sideLength } = props;
	return (
		<div
			className={`tile ${sideLength === 8 ? " for_64" : ""}`}
			style={{ background: Color(value).background }}
		>
			<span className="tile_value" style={{ color: Color(value).color }}>
				{value ? value : ""}
			</span>
		</div>
	);
}

export default Tile;
