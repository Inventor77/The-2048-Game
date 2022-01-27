import React from "react";

function Tile(props) {
	const { value } = props;
	return (
		<div className="tile4">
			<span className="tile_value">{value}</span>
		</div>
	);
}

export default Tile;
