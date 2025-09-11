const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/user', (req, res, next) => {
    res.send('<h1>Hello from GET request!</h1><form action="/client" method="POST"><button type="submit">Submit POST</button></form>');
});

app.post('/client', (req, res, next) => {
    res.send('<h1>Hello from POST request!</h1>');
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');