const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

const runServer = () => {
  app.prepare()
    .then(() => {
      const server = express();
      server.use(cookieParser());
      server.get('*', (req, res) => handle(req, res));
      server.listen(port, (error) => {
        if (error) throw error;
        console.log(`Server listening on port ${port}`);
      });
    });
};

runServer();
