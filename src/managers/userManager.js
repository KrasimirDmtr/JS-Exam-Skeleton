const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt')
const {SECRET,TOKEN_KEY} = require('../config/config')

exports.login = async (email, password) => {
    //find user by email
    const userEmail = await User.findOne({ email });
    if (!userEmail) {
        throw new Error('Invalid email or password!');
    }

    //check password
    // const isValid = await bcrypt.compare(password, userEmail.password);
    // if (!isValid) {
    //     throw new Error('Invalid email or password!');
    // }
    const token = await generateToken(email)

    return token;

  
};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user) {
        throw new Error('Username already exists!');
    }
    const createdUser =  User.create(userData);
    const token = await generateToken(createdUser)
    return token;
};


async function generateToken(userEmail){
    const payload = {
        _id: userEmail._id,
        username: userEmail.username,
        email: userEmail.email
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
}

