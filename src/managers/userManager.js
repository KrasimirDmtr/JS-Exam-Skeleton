const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt')
const SECRET = '8a541a9d-e080-412e-9f89-99d95d71740b'

exports.login = async (emai, password) => {
    //find user by email
    const email = await User.findOne( {email});
    if (!email){
        throw new Error('Invalid email or password!');
    }

    //check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid){
        throw new Error('Invalid email or password!');
    }

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});

    return token;
};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user){
        throw new Error('Username already exists!');
    }

    return User.create(userData);
};

exports.logout = () => {

}

