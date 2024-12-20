const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  mobile: {
    type: Number,
    required: true
  },
},
  { timestamps: true }
)

module.exports = mongoose.model("user", userSchema)