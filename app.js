const express = require('express');
const path = require('path');
const { engine, create } = require('express-handlebars');
const app = express();
const hbs = create({});

hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/teste', require('./pages/teste'));

app.listen(3333, () => console.log('Listening'));