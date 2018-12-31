import express from 'express';
import path from 'path';
import open from 'open';
import Compression from 'compression';

/* eslint-disable no-console */

const port = 4040;
const app = express();

app.use(Compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
