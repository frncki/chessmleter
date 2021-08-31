import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.send('ChessMLeter API!');
});

app.get('/eval/:fenPos', (req, res) => {
  return res.send('here there will be yours eval');
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on http://localhost:${process.env.PORT}`),
);