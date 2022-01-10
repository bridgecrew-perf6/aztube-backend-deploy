const express = require('express');
const { exec } = require("child_process");

const PORT = 4060;
const API_PREFIX = '';

const app = express();

app.get(API_PREFIX + '/deploy', (req,res) => {
  console.log('Running build');

  exec('/home/azproject/deploy.sh', (error, stdout, stderr) => {
    if(error || stderr){
      res.status(500).send({error: error, stderr: stderr});
    }else{
      res.send(stdout);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
