const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    umur: {
        type: Number,
        require: true
    },
    sekolah: {
        type: String,
        require: true
    },
    main: {
        type: String,
        require: true
    },
    feeling: {
        type: String,
        require: true
    },
    nilai: {
        type: Number,
        require: true
    },
    opini: {
        type: String,
        require: true
    }
}, { timestamps:true });

const User = mongoose.model('User', userSchema);
module.exports = User;