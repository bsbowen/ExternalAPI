const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS middleware

// Middleware to serve static files (HTML, CSS, JS) from the 'docs' folder
app.use(express.static('docs'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the index.html file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Route to handle form submissions
app.post('/get-movie', async (req, res) => {
    const { query, type, year, plot } = req.body;
    console.log('Received request with:', { query, type, year, plot }); // Log the request data

    const apiKey = '4540fbd917msh732e30ebb2cb1f8p1260c9jsnf9e27ec6465d'; // Your API key
    const apiHost = 'movie-database-alternative.p.rapidapi.com';
    const apiUrl = 'https://movie-database-alternative.p.rapidapi.com/';

    const options = {
        method: 'GET',
        url: apiUrl,
        params: {
            r: 'json',
            s: query,
            y: year,
            type: type,
            plot: plot
        },
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
        }
    };

    try {
        const response = await axios.request(options);
        console.log('API response:', response.data); // Log the API response
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data from API:', error); // Log the error
        res.status(500).send('Error retrieving data from API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
