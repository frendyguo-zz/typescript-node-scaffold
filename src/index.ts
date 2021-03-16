import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong!');
})

app.listen(port, () => {
  console.log('Listening on port', port);
});
