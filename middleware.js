const express = require('express');
const app = express();

app.use( (req, res, next) => {
    console.log('First Middleware');
    next();
});

app.use( (req, res, next) => {
    console.log('Second Middleware');
    res.send('<h1>Hello from Express.js!</h1>');
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');