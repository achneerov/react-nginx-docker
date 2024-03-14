const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

app.options('/calculate', cors());

app.post('/calculate', (req, res) => {
    const number = parseFloat(req.body.number);
    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid number" });
    }
    
    const result = number * 2; // Example calculation, you can change it to whatever you want

    res.json({ result: result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
