const User = require('../models/User');

exports.login = (emai, password) => {

};

exports.register = async (userData) => {
    const user = User.findOne({ username: userData.username });

    if (user){
        throw new Error('Username already exists!');
    }

    return User.create(userData);
};

exports.logout = () => {

}

