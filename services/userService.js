const userDao = require('../dao/userDao')

const addUserService = (userDetails) => {
  return new Promise((resolve, reject) => {
    userDao.addUserDao(userDetails)
    .then(userResponse => {
      let apiResponse = {
        status:'SUCCESS',
        statusCode:200,
        userId:userResponse.id
      }
      resolve(apiResponse)
    })
    .catch(userError => {
      reject(userError)
    })
  })
}

const getUserService = () => {
  return new Promise((resolve,reject) => {
    userDao.getUserDao()
    .then(userResponse => {
      resolve(userResponse)
    })
    .catch(userError => {
      reject(userError)
    })
  })
}

module.exports = {
  addUserService,
  getUserService
}