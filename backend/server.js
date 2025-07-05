const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const sampleHeadlines = [
  "Discover why this place is a local favorite!",
  "The top-rated business in your area this year!",
  "Your go-to spot for unforgettable service!",
  "Why everyone is talking about this place in 2025!",
  "Trusted by locals – and here's why!",
  "Award-winning service just around the corner!",
  "Voted best business in town!",
];

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ message: "Name and location are required." });
  }

  const response = {
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 200 + 10),
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`,
  };

  res.json(response);
});

app.get("/regenerate-headline", (req, res) => {
  const { name = "This Business", location = "Your City" } = req.query;

  const randomIndex = Math.floor(Math.random() * sampleHeadlines.length);
  const headline = `${name}: ${sampleHeadlines[randomIndex]} (${location})`;

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
