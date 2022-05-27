const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({noCors: false});
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(cors());
server.use(router);

server.listen(port);
