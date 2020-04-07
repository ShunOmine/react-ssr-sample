import express from 'express';
import { ssr } from './src/ssr';

const app = express();

// set up the server for 3000 port.
app.listen(3000);

app.get('/', (_, res) => {
  const response = ssr();
  res.send(response);
});
