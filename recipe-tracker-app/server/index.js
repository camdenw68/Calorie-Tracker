// server/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5001;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
