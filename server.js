const express = require('express'); //express library import
const app = express(); // express app initialization
const port = 3000; // port assignation

// set static assets
app.use(express.static('images'));

// start server listen
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});

// routing
app.get('/api/v1/blog', (req, res) => {
    res.send('Server del mio blog');
});