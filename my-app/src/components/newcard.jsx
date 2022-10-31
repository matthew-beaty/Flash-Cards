import React from "react";
import "dracula-ui/styles/dracula-ui.css";
import { Box, Button, Card, Text, Input, Paragraph } from "dracula-ui";

export default function NewCard({}) {
  const frontRef = React.useRef();
  const backRef = React.useRef();

  const [isMinimized, setIsMinimized] = React.useState(true);

  if (isMinimized) {
    return (
      <Card>
        <Button onClick={() => setIsMinimized(false)}>+</Button>
      </Card>
    );
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // do stuff
    console.log("submitting", frontRef, backRef);
  };
  return (
    <Card style={{ position: "relative" }} onSubmit={onSubmit} p="md">
      <Button
        style={{ position: "absolute", right: ".5rem", top: ".5rem" }}
        onClick={() => setIsMinimized(true)}
      >
        -
      </Button>
      <form>
        <Box mb="sm">
          <label for="front">
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
          />
        </Box>
        <Box>
          <label for="back">
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
          />
        </Box>
        <input type="submit" style={{ display: "none" }} />
      </form>
    </Card>
  );
}
