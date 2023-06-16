const express = require('express');
const routes = require('./routes')
const hbs = require('express-handlebars');

const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(routes)

app.listen(3000,console.log('hi'))