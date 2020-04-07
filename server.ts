import express from 'express';
import { ssr } from './src/ssr';

const app = express();

// set up the server for 3000 port.
app.listen(3000);

app.get('/', (_, res) => {
  res.send(ssr());
});
