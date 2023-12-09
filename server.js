const express = require('express');
const compression = require('compression');
const app = express();
const port = 3000;

app.use(compression());

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
