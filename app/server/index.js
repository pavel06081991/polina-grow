import express from 'express';

const app = express();

app.start = function() {
  app.get('/', (req, res) => {
    res.send('Hello world from Express!!');
  });

  app.listen(8080);
};

module.exports = app;
