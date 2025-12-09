import express from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello API! 🚀');
});

// Another sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express 🌐 + TypeScript! 📃' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});