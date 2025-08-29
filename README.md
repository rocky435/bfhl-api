This is a small backend API I built for my Full Stack course assignment.
The task was to create a POST API endpoint /bfhl which takes an array as input and returns some processed output like separating odd/even numbers, alphabets, special characters, and also giving sum and a custom string.

How to Run Locally:
1)Clone the repo:

git clone https://github.com/<your-username>/bfhl-api.git
cd bfhl-api


2)Install dependencies:

npm install


3)Start server:

node index.js

->The API will be running on:

http://localhost:3000/bfhl

API Details:

Method: POST
Route: /bfhl
Content-Type: application/json

Sample Request
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

Sample Response
{
  "is_success": true,
  "user_id": "rahul_kumar_11112004",
  "email": "rahul@vitap.ac.in",
  "roll_number": "22BCE1234",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
