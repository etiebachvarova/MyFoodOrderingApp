const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// API endpoint to handle registration
app.post('/api/register', (req, res) => {
    console.log('Registration data received:', req.body);
    res.send({ message: 'Registration successful' });
});

// API endpoint to handle login
app.post('/api/login', (req, res) => {
    console.log('Login data received:', req.body);
    res.send({ message: 'Login successful' });
});

// API endpoint to get food categories
app.get('/api/foodCategories', (req, res) => {
    fs.readFile('./data/foodCategories.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Unable to read data');
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// API endpoint to handle payment
app.post('/api/payment', (req, res) => {
    console.log('Payment data received:', req.body);
    res.send({ message: 'Payment processed successfully' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
});
