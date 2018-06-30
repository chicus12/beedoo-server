const mongoose = require('mongoose')

const { Schema } = mongoose

const categorySchema = new Schema(
  {
    name: String,
    company: { type: Schema.Types.ObjectId, ref: 'companies' },
    servers: [{ type: Schema.Types.ObjectId, ref: 'servers' }],
  },
  { timestamps: true }
)

const Category = mongoose.model('categories', categorySchema)

module.exports = Category
