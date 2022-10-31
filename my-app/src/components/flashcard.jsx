import React from "react";
import "dracula-ui/styles/dracula-ui.css";
import { Card, Text, Button, Input, Paragraph } from "dracula-ui";
import { randomKudos } from "../lib/helpers";

const FlashCard = ({ card, deleteCard }) => {
  const [isCorrect, setIsCorrect] = React.useState(false);
  const input = React.useRef();

  return (
    <Card
      style={{ position: "relative" }}
      height="xxs"
      p="md"
      width="md"
      color={isCorrect ? "pinkPurple" : "purple"}
    >
      <Button
        onClick={deleteCard}
        style={{ position: "absolute", left: "0", top: "0" }}
        color="red"
      >
        <Text color="black" weight="bold">
          X
        </Text>
      </Button>

      <Paragraph weight="bold" color="white">
        {card.front}
      </Paragraph>
      <Input
        mb="sm"
        mt="md"
        style={{ display: "block" }}
        ref={input}
        color="white"
        placeholder="guess"
        onChange={() => card.back === input.current.value && setIsCorrect(true)}
      />
      {isCorrect && <Paragraph color="green">{`${randomKudos()}!!`}</Paragraph>}
    </Card>
  );
};

export default FlashCard;
