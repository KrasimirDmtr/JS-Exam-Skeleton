const express = require('express');
const routes = require('./routes');
const path = require('path');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware');



const app = express();


//Change name
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected'))
    .catch(err => console.log('Error'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');


app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(auth);

app.use(routes);

app.listen(5000);