const express = require("express");
const router = express.Router();
const Card = require("../models/cards");

// get all
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one
router.get("/:id", getCard, (req, res) => {
  res.send(res.card);
});

// create one
router.post("/", async ({ body: { front, back } }, res) => {
  const card = new Card({ front, back });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one
router.patch("/:id", getCard, async ({ body: { front, back } }, res) => {
  if (front != null) {
    res.card.front = front;
  }
  if (back != null) {
    res.card.back = back;
  }

  try {
    const updatedCard = await res.card.save();
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete one
router.delete("/:id", getCard, async (req, res) => {
  try {
    await res.card.remove();
    res.json({ message: "Deleted card" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCard(req, res, next) {
  let card;

  try {
    card = await Card.findById(req.params.id);
    if (card == null) {
      return res.status(404).json({ message: "cannot find card" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.card = card;
  next();
}

module.exports = router;
