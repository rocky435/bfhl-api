const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FULL_NAME = "Phanindra_Kumar_Sure";
const DOB = "11112004";
const EMAIL = "rsvapk4200@gmail.com";
const ROLL_NUMBER = "22bce20474";

// Health check
app.get("/", (req, res) => {
  res.json({ message: "BFHL API is running", endpoint: "POST /bfhl" });
});

// POST /bfhl route
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body || {};
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const user_id = `${FULL_NAME.toLowerCase()}_${DOB}`;
    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    const letters = [];

    data.forEach((raw) => {
      const item = String(raw);

      if (/^\d+$/.test(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        letters.push(item);
      } else if (item.trim() !== "") {
        special_characters.push(item);
      }
    });

    const concat_string = letters
      .join("")
      .split("")
      .reverse()
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    return res.status(200).json({
      is_success: true,
      user_id,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string,
    });
  } catch (err) {
    return res.status(500).json({ is_success: false, message: err.message });
  }
});

module.exports = app;
