import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('ChessMLeter API!')
})

app.get('/test', (req, res) => {
  res.send('siema eniu')
})
 
app.listen(process.env.PORT, () =>
  console.log(`App listening on http://localhost:${process.env.PORT}`),
);