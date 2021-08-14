const express = require('express');
const app = express();
const bodyParser = require('body-parser');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('view',__dirname +  'public/index.html');


app.get('/', (req,res) => {
  res.render(view);
})

app.listen(8000);
console.log('Escutando...');
