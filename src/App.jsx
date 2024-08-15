import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Card from "./components/Card";
import Arrow from "./components/Arrow";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [arrows, setArrows] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: { x: 50, y: 50 },
      size: { width: 200, height: 100 },
    };
    setCards([...cards, newCard]);
  };

  const updateCardPosition = (id, position) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, position } : card))
    );
  };

  const updateCardSize = (id, size) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, size } : card)));
  };

  const connectCards = (startCardId, endCardId) => {
    const newArrow = {
      id: Date.now(),
      startCardId,
      endCardId,
    };
    setArrows([...arrows, newArrow]);
  };

  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="App">
      <Canvas>
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            updatePosition={updateCardPosition}
            updateSize={updateCardSize}
            openPopup={openPopup}
          />
        ))}
        {arrows.map((arrow) => (
          <Arrow
            key={arrow.id}
            startCard={cards.find((c) => c.id === arrow.startCardId)}
            endCard={cards.find((c) => c.id === arrow.endCardId)}
          />
        ))}
      </Canvas>
      <button onClick={addCard}>Add Card</button>
      {selectedCard && <Modal card={selectedCard} onClose={closePopup} />}
    </div>
  );
}

export default App;
