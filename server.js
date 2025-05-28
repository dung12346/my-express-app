const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder if needed
// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Xin chào từ Node.js Express trên Render!</h1>');
});

app.get('/api', (req, res) => {
  res.json({ message: 'API hoạt động bình thường!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
