const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

let companies = []; // Dummy data storage for simplicity

app.use(cors());
app.use(bodyParser.json());

// Get all companies
app.get('/api/companies', (req, res) => {
    res.json(companies);
});

// Add a new company
app.post('/api/companies', (req, res) => {
    const newCompany = req.body;
    companies.push(newCompany); // In a real app, save it to a database
    res.status(201).json(newCompany); // Return the added company
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
