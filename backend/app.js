const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Simple Router Examples
app.get('/', (req, res) => {
    res.send('Hello, Profit Analyze App!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})