const db = require("./db");

const Post = db.sequelize.define('postagens',{
  nome:{
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.TEXT
  }
});

module.exports= Post;

//Post.sync({force:true});