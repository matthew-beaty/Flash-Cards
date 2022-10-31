const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Mongo Setup
const mongoDBURL = "mongodb://127.0.0.1/flash_cards";
mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", (error) => console.log("Connected to database"));

// App setup
const app = express();
app.use(express.json());

// CORS config
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// routes todo move to own file
app.get("/", (req, res) => {
  res.json({ message: "sup" });
});

const cardsRouter = require("./routes/cards");
app.use("/cards", cardsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Coffee sipped. Good morning");
});
