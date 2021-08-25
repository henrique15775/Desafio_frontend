const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelado = require('sequelize');
const Post = require('./javascript/Posts.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('view',__dirname +  'public/index.html');
  

app.get('/', (req,res) => {
  res.render(view);
})

app.post('/add', (req,res) => {
  
  Post.create({
    nome: req.body.fname + req.body.lname,
    email: req.body.emailadd,
    senha: req.body.secret
  }).then(()=>{
    res.send("Formulario enviado!!");
  }).catch((erro)=>{
    res.send(erro);
  });

})


app.listen(8000);
console.log('Escutando...');