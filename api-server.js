const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json'); // Asegúrate de que este sea el camino correcto a tu archivo db.json
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(3000, () => { // Usa un puerto diferente al del servidor SSR
  console.log('JSON Server is running');
});
