const express = require('express');
const app = express();

// Middleware - parse JSON body
app.use(express.json());

// Fake database (memory la store pannuvom)
let products = [];

// ✅ POST - Add product
app.post('/product', (req, res) => {
    const productName = req.body.name;

    if (!productName) {
        return res.status(400).send("Product name required");
    }

    products.push(productName);
    res.send(`Product '${productName}' added successfully!`);
});

// ✅ GET - Get all products
app.get('/product', (req, res) => {
    res.json({
        message: "Available products",
        products: products
    });
});

// Server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
