const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('asdasd World!');
});

// Port
const port = 3000;
app.listen(process.env.port || port);
    console.log('Server started on port ' + (process.env.port || port));

