const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./routes');
const { render } = require('node-sass');
const db = require('./config/db');
// connect DB
db.connect();
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'publics')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));
// templale engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
