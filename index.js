const express = require('express');
const app = express();
const bodyParser = require('body-parser');



/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(express.static('styles'));
app.use(express.static('images'));
app.set('view',__dirname +  'index.html');


app.get('/', (req,res) => {
  res.sendFile('index.html');
})
*/
app.listen(8000);