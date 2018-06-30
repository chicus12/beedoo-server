const StandardError = require('standard-error')

const User = require('../models/User')
const { encryptPassword } = require('../config/utils/miscel')

async function signUp(req, res) {
  try {
    const user = await User.findOne({ username: req.body.email })

    if (user) {
      throw new StandardError(
        'Ya se encuentra un usuario registrado con este email',
        { code: 409 }
      )
    }

    const userData = {
      ...req.body,
      password: encryptPassword(req.body.password),
    }

    const userCreated = User.create(userData)
  } catch (error) {
    console.log('Error message: ', error.message)
    console.log('Error code: ', error.code)
  }
}

module.exports = {
  signUp,
}
