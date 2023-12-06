const newsRouter = require('./newsRouter');
const siteRouter = require('./siteRouter');
const courses = require('./courses');
const me = require('./me');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', me);
  app.use('/courses', courses);
  app.use('/', siteRouter);
}
module.exports = route;
