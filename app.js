const Joi = require('joi');
const express = require('express');
const app = express();

// Enable use of Body element
app.use(express.json());

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Rob' },
    { id: 4, name: 'Liz' }
];

function validatUser(user){
    // Set Joi validation schema
    const schema = {
        name: Joi.string().min(2).required()
    }
    // Put Joi to work
    console.log(user);
    return Joi.validate(user, schema);
}

// Static route
app.get('/', (req, res) => {
    res.send('Express posts');
});

// Dynamic path/value route
app.get('/users/:id', (req, res) => {
    // Return 404 header if the ID doesn't exist and send a message to the user
    const userId = users.find(u => u.id === parseInt(req.params.id));
    if (!userId) {
        res.status(404).send('No resourse found');
        return;
    }
    
    // Print ID
    res.send(userId.name);
});

// Route withe a qurey parameter handling
app.get('/users', (req, res) => {
    // Print object with all parameters
    res.send(req.query);
});

// Post to Users array
app.post('/users', (req, res) => {

    // Validate the result
    const result = validatUser(req.body);

    // Process the error result
    if (result.error) {
        res.status(400).send(result.error);
        console.log("Oh no!", result.error.details[0].message);
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

// Route for updating Users array
app.put('/users/:id', (req, res) => {
    // Return 404 header if the ID doesn't exist and send a message to the user
    const userId = users.find(u => u.id === parseInt(req.params.id));
    if (!userId) {
        res.status(404).send('No resourse found');
        return;
    }

    // Validate the result
    const result = validatUser(req.body);

    // Process the error result
    if (result.error) {
        res.status(400).send(result.error);
        console.log("Oh no!", result.error.details[0].message);
        return;
    }

    // Update User record
    userId.name = req.body.name;

    // Send updated user back to the user
    res.send(userId);
});

app.delete('/users/:id', (req, res) => {
    // Return 404 header if the ID doesn't exist and send a message to the user
    const userId = users.find(u => u.id === parseInt(req.params.id));
    if (!userId) {
        res.status(404).send('No resourse found');
        return;
    }

    // Delete user
    const index = users.indexOf(userId);
    console.log(index);
    users.splice(index, 1);

    res.send(users);
});

// Set port
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`)});
// app.delete()
