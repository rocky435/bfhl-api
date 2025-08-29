const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


const FULL_NAME = "Phanindra_Kumar_Sure"; 
const DOB = "11112004";          
const EMAIL = "rsvapk4200@gmail.com";
const ROLL_NUMBER = "22bce20474"; 

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    // Build user_id
    const user_id = `${FULL_NAME.toLowerCase()}_${DOB}`;

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let letters = [];

    data.forEach(item => {
      if (!isNaN(item) && item.trim() !== "") {
        let num = parseInt(item);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        letters.push(item);
      } else {
        special_characters.push(item);
      }
    });

    // Alternating caps reverse concat string
    let concat_string = letters.join("").split("").reverse()
      .map((ch, idx) => idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
      .join("");

    res.status(200).json({
      is_success: true,
      user_id,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (err) {
    res.status(500).json({ is_success: false, message: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000/bfhl");
});
