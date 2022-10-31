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
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        console.log(data);
        setCards([...data]);
      });
  }, []);

  return (
    <div
      style={{ backgroundColor: "rgb(21, 23, 27)", minHeight: "100vh" }}
      className="App"
    >
      test
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <NewCard />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}
        >
          {cards.length > 0 && cards.map((c) => <FlashCard card={c} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
