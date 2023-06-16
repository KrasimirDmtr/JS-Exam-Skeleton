const express = require('express');
const routes = require('./routes');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.urlencoded({ extended: false}));
app.use(routes);

app.listen(3000,console.log('hi'));