const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS middleware

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('docs'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submissions
app.post('/get-movie', async (req, res) => {
    const { query, type, year, plot } = req.body;
    const apiKey = '4540fbd917msh732e30ebb2cb1f8p1260c9jsnf9e27ec6465d';
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
        const data = response.data;
        // Send the data back to the client
        res.json(data);
    } catch (error) {
        res.status(500).send('Error retrieving data from API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
