const User = require('../models/User');
const bcrypt = require('bcrypt');

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

