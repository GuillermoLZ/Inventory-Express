const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.get('/api/products', (req, res) => {
  res.json({ products: ['Laptop', 'Phone', 'Tablet', 'Headphones'] });
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, product: 'Laptop' });
});

app.post('/api/products', (req, res) => {
  res.status(201).json({ message: 'Product created', id: 1 });
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Product updated', id });
});

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Product deleted', id });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});