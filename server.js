const express = require('express');
const app = express();

app.use('/', require('./routes')); // You could also say /routes/index but it's implied

// Port
const port = 3000;
app.listen(process.env.port || port);
console.log('Server started on port ' + (process.env.port || port));