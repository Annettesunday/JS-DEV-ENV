var express = require('express');


const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req,res) => {
  res.status(200).send({
    message: 'Welcome to my API'
  })
})

app.all('*', (req, res) => {
  res.status(400).send({
    message: 'This action cannot be executed'
  })
})

app.listen(port, () => console.log('Running on port ' + port));
