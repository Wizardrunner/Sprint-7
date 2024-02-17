const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');
const jwt = require('jsonwebtoken'); // Importa jwt para generar tokens de autenticación
const db = require('./db.json'); // Importa tu base de datos JSON

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.use(auth);

// Endpoint para el inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.users.find(u => u.email === email && u.password === password);

  if (user) {
    // Si las credenciales son válidas, genera un token de autenticación
    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

    // Devuelve el token como respuesta
    res.status(200).json({ token });
  } else {
    // Si las credenciales no son válidas, responder con un mensaje de error
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
