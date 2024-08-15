import React from "react";
import { Arrow } from "react-arrows";

function ArrowComponent({ startCard, endCard }) {
  return (
    <Arrow
      from={{
        x: startCard.position.x + startCard.size.width / 2,
        y: startCard.position.y + startCard.size.height / 2,
      }}
      to={{
        x: endCard.position.x + endCard.size.width / 2,
        y: endCard.position.y + endCard.size.height / 2,
      }}
      className="arrow"
      headClassName="arrow-head"
    />
  );
}

export default ArrowComponent;
