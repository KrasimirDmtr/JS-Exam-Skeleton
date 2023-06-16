const User = require('../models/User');

exports.login = (emai,password) =>{

};

exports.register = (userData) => {
    User.create(userData)
    console.log(userData);
};

exports.logout = () => {
    
}

