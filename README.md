# BFHL API (BAJAJ FINSERV HEALTH ROUND-1)


POST `/bfhl`

    <!-- Request -->
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

//  RESPONCE
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

