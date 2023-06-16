const router = require('express').Router();
const userManager = require('../managers/userManager');


router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', async (req, res) => {
    const { email, passowrd } = req.body

    const token = await userManager.login(email, passowrd);

    res.cookie('token', token);

    res.redirect('/')
})

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    await userManager.register({ username, email, password, repeatPassword });

    res.redirect('/users/login')
})



module.exports = router