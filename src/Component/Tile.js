import React from "react";

function Tile(props) {
  const { value } = props;
  return (
    <div className="tile">
      <span className="tile_value">{value}</span>
    </div>
  );
}

export default Tile;
