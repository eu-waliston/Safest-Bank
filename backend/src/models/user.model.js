const mongoose = require('mongoose');

const CreateUser = mongoose.Schema({
  name: {
    type: String, required: true,
  },
  username: {
    type: String, required: true, minLenght: 6, maxLenght: 32, unique: true,
  },
  email: { type: String, required: true },
  password: {
    type: Number, required: true, minLenght: 6, maxLenght: 32,
  },
  role: [String],
});

module.exports = mongoose.model('user', CreateUser);
