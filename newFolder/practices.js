console.log('Hello, World!');   
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
require("dotenv").config();
console.log("test password:", process.env.TEST_PASSWORD);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB ^_^'))
  .catch(err => console.error('Error connecting to MongoDB:', err));  

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the API. food',  
    timestamp: new Date(),
  };
//   res.send('This is some sample data from the API.');
  res.json(data);
});
app.get('/api/info', (req, res) => {
  const info = {
    name: 'Sample API',         
    version: '1.0.0',
    description: 'This is a sample API endpoint.',
  };
  res.json(info);
});
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },   
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    ];  
    res.json(users);
});
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 },
  ];
  res.json(products);
});
app.get('/api/status', (req, res) => {
  const status = {
    status: 'OKay bro',   
    uptime: process.uptime(),
    timestamp: new Date(),
  };
  res.json(status);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});