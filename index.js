
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const sequelado = require('sequelize');

const Post = require('./javascript/Posts.js');

const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.set('oxi','./index.html');



app.get('/',(req,res) => {
  return res.render(oxi);
})
app.post('/ola',(req,res) => {
  
  Post.create({
    nome: req.body.fname + req.body.lname,
    email: req.body.emailadd,
    senha: req.body.secret
  }).then(()=>{
    res.redirect('./sent.html');
  }).catch((erro)=>{
    res.send(erro + "DEUUUU RUIIIIIIIIIIIIIIMMMMMMMMM");
  });

});

app.listen(8000);
console.log('Escutando...');
