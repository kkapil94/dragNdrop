import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Card({
  id,
  text,
  position,
  size,
  updatePosition,
  updateSize,
  openPopup,
}) {
  const [isResizing, setIsResizing] = useState(false);

  const handleDrag = (e, data) => {
    updatePosition(id, { x: data.x, y: data.y });
  };

  const handleResize = (e, direction, ref, delta, position) => {
    setIsResizing(true);
    updateSize(id, { width: ref.style.width, height: ref.style.height });
  };

  const handleResizeStop = () => {
    setIsResizing(false);
  };

  return (
    <Draggable position={position} onDrag={handleDrag} disabled={isResizing}>
      <Resizable
        size={size}
        onResizeStop={handleResizeStop}
        onResize={handleResize}
      >
        <div className="card">
          <p>{text.slice(0, 50)}...</p>
          <button onClick={() => openPopup({ id, text })}>Show More</button>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Card;
