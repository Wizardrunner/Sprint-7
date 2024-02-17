// server.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Importa el paquete cors
const db = require('./db.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS

app.use(bodyParser.json());

// Endpoint para manejar las solicitudes POST a /login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Ruta de ejemplo para obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(db.users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
