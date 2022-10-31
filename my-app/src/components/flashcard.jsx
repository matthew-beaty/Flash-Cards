import React from "react";
import "dracula-ui/styles/dracula-ui.css";
import { Card, Text, Input, Paragraph } from "dracula-ui";
import { randomKudos } from "../lib/helpers";

const FlashCard = ({ card }) => {
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
      <Paragraph style={{ position: "absolute", right: "10px", top: "10px" }}>
        HI
      </Paragraph>

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
      {isCorrect && (
        <Paragraph weight="bold" color="green">
          {`${randomKudos()}!!`}
        </Paragraph>
      )}
    </Card>
  );
};

export default FlashCard;
