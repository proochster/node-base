const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Express posts');
});

app.listen(3000, () => {console.log('Server listening...')})
// app.post()
// app.put()
// app.delete()
