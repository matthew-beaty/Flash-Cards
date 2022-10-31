import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import FlashCard from "./components/flashcard";
import NewCard from "./components/newcard";

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/cards")
      .then((response) => response.json())
      .then((data) => {
        setCards([...data]);
      });
  }, []);

  const deleteCard = async (id) => {
    console.log("deleting", id);

    fetch(`http://localhost:8080/cards/${id}`, { method: "DELETE" });
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "rgb(21, 23, 27)",
        minHeight: "100vh",
      }}
      className="App"
    >
      test
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "absolute", left: "2rem", top: "2rem" }}>
          <NewCard />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}
        >
          {cards.length > 0 &&
            cards.map((c) => (
              <FlashCard deleteCard={() => deleteCard(c._id)} card={c} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
