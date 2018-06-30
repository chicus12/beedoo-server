const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bearer = require('token-extractor')

function encryptPassword(password) {
  return crypto
    .createHash('sha256')
    .update(password)
    .digest('hex')
}

function verificationToken() {
  return crypto.randomBytes(48).toString('hex')
}

function signToken(payload, options = {}, secret = '7F4DHIEUlLkXlL63qM') {
  return jwt.sign(payload, secret, options)
}

function verifyToken(token, options = {}, secret = '7F4DHIEUlLkXlL63qM') {
  return jwt.verify(token, secret, options)
}

function extractToken(req) {
  return new Promise((resolve, reject) => {
    bearer(req, (err, token) => {
      if (err) return reject(err)

      return resolve(token)
    })
  })
}

module.exports = {
  encryptPassword,
  signToken,
  verifyToken,
  extractToken,
  verificationToken,
}
