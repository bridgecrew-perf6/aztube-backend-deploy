const express = require('express');

const PORT = 4060;
const API_PREFIX = '';

const app = express();

app.get(API_PREFIX + '/deploy', (req,res) => {
  res.send('OK');

  console.log('Deploy!');
});

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
