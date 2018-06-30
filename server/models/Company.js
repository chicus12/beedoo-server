const mongoose = require('mongoose')

const { Schema } = mongoose

const companySchema = new Schema(
  {
    token: String,
    name: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
    user: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  { timestamps: true }
)

const Company = mongoose.model('companies', companySchema)

module.exports = Company
