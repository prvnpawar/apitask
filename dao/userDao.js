const User = require("../models/user");

const addUserDao = (userDetails) => {
  return new Promise((resolve, reject) => {
    User.findOne({ where: { userName: userDetails.userName } })
    .then((user) => {
      if (user) {
        reject(`User name with ${user.dataValues.userName} already exists`);
      } else {
        User.create(userDetails)
          .then((userResponse) => {
            console.log(userResponse);
            resolve(userResponse);
          })
          .catch((userError) => {
            reject(userError);
          });
      }
    });
  });
};

const getUserDao = () => {
  return new Promise((resolve, reject) => {
    User.findAll()
      .then((userResponse) => {
        resolve(userResponse);
      })
      .catch((userError) => {
        reject(userError);
      });
  });
};

module.exports = {
  addUserDao,
  getUserDao,
};
