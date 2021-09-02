import 'dotenv/config';
import cors from 'cors';
import express from 'express';
// import { evaluate } from './stockfishWorker.js'

const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  return res.send('ChessMLeter API!');
});

app.post('/eval/:fenPos', (req, res) => {
  const fenPosition = req.params.fenPos
  console.log(fenPosition)
  // evaluate(fenPosition);
  return res.send(`here will be your eval of ${fenPosition}`);
});

app.post('/eval', (req, res) => {
  console.log(req.body)
  return res.send(req.body.fenPosition);
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on http://localhost:${process.env.PORT}`),
);