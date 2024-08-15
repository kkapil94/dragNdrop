import React from "react";

function Popup({ card, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Card Details</h2>
        <p>{card.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
