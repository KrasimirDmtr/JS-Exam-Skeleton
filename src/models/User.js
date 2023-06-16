const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    username: {
        type:String,
        required: true,
        unique:true
    }, 
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true
    },
})

userSchema.virtual('repeatPassword')
    .set(function(value) {
        if (this.password !== value) {
            throw new Error('Passwords are not the same!');
        };
    });

const User = mongoose.model('User', userSchema);

module.exports = User;