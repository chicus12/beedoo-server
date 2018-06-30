const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    token: String,
    username: String,
    name: String,
    lastName: String,
    secondLastName: { type: String, required: false },
    email: String,
    facebook: { type: Number, default: 0 },
    google: { type: Number, default: 0 },
    phone: String,
    password: String,
    status: { type: Number, default: 0 },
    verifiedAccount: { type: Number, default: 0 },
    avatar: String,
    gender: String,
  },
  { timestamps: true }
)

const Users = mongoose.model('users', userSchema)

module.exports = Users
