const Sequelize = require('sequelize');
const db = require('../configs/dbConfig');

const User = db.define('user', {
    userName: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
},
{
    freezeTableName: true,
    },
);

User.sync().then(() => {
  console.log('table created');
});
module.exports = User;