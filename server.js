const express = require('express'); //express library import
const app = express(); // express app initialization
const port = 3000; // port assignation

// set static assets middleware
app.use(express.static('images'));

// start server listen
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});

//routing 1
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

// routing 2
app.get('/bacheca', (req, res) => {
    
    const posts = [
        {
            title: 'Ciambellone',
            content: 'A delicious and fluffy Italian ring cake perfect for breakfast or dessert.',
            img: '/ciambellone.jpeg',
            tags: ['dessert', 'cake', 'Italian', 'breakfast']
        },
        {
            title: 'Cracker alla barbabietola',
            content: 'Healthy and crunchy beetroot crackers, a perfect snack for any time of the day.',
            img: '/cracker_barbabietola.jpeg',
            tags: ['snack', 'healthy', 'beetroot', 'crunchy']
        },
        {
            title: 'Pane fritto dolce',
            content: 'Sweet fried bread, a traditional treat that is crispy on the outside and soft on the inside.',
            img: '/pane_fritto.jpeg',
            tags: ['sweet', 'fried', 'bread', 'traditional']
        },
        {
            title: 'Pasta alla barbabietola',
            content: 'A vibrant and flavorful beetroot pasta dish that is both healthy and delicious.',
            img: '/pasta_barbabietola.jpeg',
            tags: ['pasta', 'beetroot', 'healthy', 'flavorful']
        },
        {
            title: 'Torta paesana',
            content: 'A rich and moist country-style cake made with simple ingredients and lots of love.',
            img: '/torta_paesana.jpeg',
            tags: ['cake', 'country-style', 'rich', 'moist']
        }
    ]

    const data = [
        {
            success: true,
            response: posts
        }
    ]

    res.json(data);
});