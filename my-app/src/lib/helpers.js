const kudosList = [
  "Nice",
  "Good job",
  "Waow",
  "Wow",
  "Cool",
  "Amazing",
  "Sick",
  "Weee",
  "So good",
  "OMG, so good",
  "Easy",
  "EZ",
  "Correct",
  "Another one down",
];

export const randomKudos = () =>
  kudosList[Math.floor(Math.random() * kudosList.length)];
