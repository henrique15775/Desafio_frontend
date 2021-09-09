
const express = require('express');
const app = express();
//const app = express.Router();

const bodyParser = require('body-parser');
const sequelado = require('sequelize');

const Post = require('./javascript/Posts.js');
//gvar http = require("http");
const path = require('path');
//const handlebars = require('express-handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.set('oxi','./index.html');
//app.set('view engine','handlebars')
//app.engine('handlebars',handlebars({defaultLayout: 'main'}))
//app.set('view',__dirname +  'public/index.html');

app.set('linke','./sent.html');

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

/*
app.get('/mijo',(req,res) => {
  res.render(oxi);
});
*/


app.listen(8000);
console.log('Escutando...');