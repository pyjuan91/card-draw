import { useState } from "react";
import { cards } from "./cards";
import "./App.css";

function App() {
  const [selectedCard, setSelectedCard] = useState<{ id: number; name: string; image: string } | null>(null);


  const drawCard = () => {
    if (cards.length === 0) {
      return;
    }
    if (cards.length === 1) {
      setSelectedCard(cards[0]);
      return;
    }
    // Make sure different cards are drawn each time
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (selectedCard && cards[randomIndex].id === selectedCard.id);

    setSelectedCard(cards[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🇰🇷 K-pop Idol 抽卡 🇰🇷</h1>
      <button onClick={drawCard} style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}>
        抽！
      </button>

      {selectedCard && (
        <div style={{ marginTop: "20px" }}>
          <h2>{selectedCard.name}</h2>
          <img src={selectedCard.image} alt={selectedCard.name} style={{ width: "300px", borderRadius: "10px" }} />
        </div>
      )}
    </div>
  );
}

export default App;
