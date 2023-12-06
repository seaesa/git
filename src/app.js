const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override')
const app = express();
const route = require('./routes');
const db = require('./config/db');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connect db
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));
app.use(methodOverride('_method'))
// template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.listen(3000, () => {
  console.log(`running on port ${3000}`);
});

db.connect();
route(app);