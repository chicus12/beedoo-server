const mongoose = require('mongoose')

const { Schema } = mongoose

const serverSchema = new Schema(
  {
    environment: {
      type: String,
      required: true,
    },
    uri: String,
    port: String,
    https: Boolean,
    time: Number,
    path: String,
    category: { type: Schema.Types.ObjectId, ref: 'categories' },
  },
  { timestamps: true }
)

const Server = mongoose.model('servers', serverSchema)

module.exports = Server
