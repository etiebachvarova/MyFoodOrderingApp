const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/register', (req, res) => {
    console.log('Registration data received:', req.body);
    res.send({ message: 'Registration successful' });
});

app.post('/api/login', (req, res) => {
    console.log('Login data received:', req.body);
    res.send({ message: 'Login successful' });
});

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

app.post('/api/payment', (req, res) => {
    console.log('Payment data received:', req.body);
    res.send({ message: 'Payment processed successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
