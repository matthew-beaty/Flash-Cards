import React from "react";
import "dracula-ui/styles/dracula-ui.css";
import { Box, Button, Card, Text, Input } from "dracula-ui";

export default function NewCard({}) {
  let frontRef = React.useRef();
  let backRef = React.useRef();

  const [isMinimized, setIsMinimized] = React.useState(true);

  if (isMinimized) {
    return (
      <Card>
        <Button color="purple" onClick={() => setIsMinimized(false)}>
          +
        </Button>
      </Card>
    );
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    const newCard = {
      front: frontRef.current.value.trim(),
      back: backRef.current.value.trim(),
    };

    // clear form
    frontRef.current.value = "";
    backRef.current.value = "";
    frontRef.current.focus();

    // submit new card
    fetch("http://localhost:8080/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    });
  };

  return (
    <Card style={{ position: "relative" }} onSubmit={onSubmit} p="md">
      <Button
        style={{ position: "absolute", left: "0", top: "0" }}
        color="white"
        onClick={() => setIsMinimized(true)}
      >
        -
      </Button>
      <form>
        <Box mb="sm">
          <label htmlFor="front">
            <Text color="white" weight="bold">
              front
            </Text>
          </label>
          <Input
            ref={frontRef}
            color="white"
            style={{ display: "block" }}
            id="front"
            name="front"
            required
          />
        </Box>
        <Box>
          <label htmlFor="back">
            <Text color="white" weight="bold">
              back
            </Text>
          </label>
          <Input
            ref={backRef}
            color="white"
            style={{ display: "block" }}
            id="back"
            name="back"
            required
          />
        </Box>
        <input type="submit" style={{ display: "none" }} />
      </form>
    </Card>
  );
}
