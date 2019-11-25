const express = require('express');
const app = express();

// Enable use of Body element
app.use(express.json());

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Rob' },
    { id: 4, name: 'Liz' }
]

// Static route
app.get('/', (req, res) => {
    res.send('Express posts');
});

// Dynamic path/value route
app.get('/users/:id', (req, res) => {
    const userId = users.find(u => u.id === parseInt(req.params.id));
    // Return 404 header if the ID doesn't exist and send a message to the user
    if (!userId) res.status(404).send('No resourse found');
    // Print ID
    res.send(userId.name);
});

// Route withe a qurey parameter handling
app.get('/users', (req, res) => {
    // Print object with all parameters
    res.send(req.query);
});

// Post to Users
app.post('/users', (req, res) => {
    // Validate user input. Check if request body contains the name
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Please provide a valid username');
        return;
    }
    const user = {
        id: users.length ++,
        name: req.body.name
    };
    // Push to user array
    users.push(user);
    // Send back newly created resource back to the user
    res.send(user);
});

// Set port
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`)});
// app.post()
// app.put()
// app.delete()
