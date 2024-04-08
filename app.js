const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.get('/getTimeStories', (req, res) => {
    try {
        // Read stories data from JSON file
        const storiesData = JSON.parse(fs.readFileSync('stories.json', 'utf-8'));

        // Respond with stories data
        res.json(storiesData);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
