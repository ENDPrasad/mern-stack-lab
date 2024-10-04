const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)