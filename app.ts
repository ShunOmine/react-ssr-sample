import express from 'express';
import { ssr } from './views/ssr';

const app = express();

// set up the server for 3000 port.
app.listen(process.env.PORT || 3000, () => {
  console.log('express app is started.');
});

app.use(express.static('assets'));

app.get('/', (_, res) => {
  // @ts-ignore
  res.send(ssr());
});
