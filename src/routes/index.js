const createRouter = require('./create');
const homeRouter = require('./home');
function route(app) {
    app.use('/create', createRouter);
    app.use('/home', homeRouter);
}

module.exports = route;
