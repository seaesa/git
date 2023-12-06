const Cource = require('../model/Cource');
class MeController {
  async storedCourse(req, res, next) {
    const course = await Cource.find({}).lean();
    const count = await Cource.countDocumentsWithDeleted({ deleted: true }).lean();
    res.render(`me/stored-courses`, { course, count });
  }

  async trash(req, res, next) {
    const find = await Cource.findWithDeleted({ deleted: true }).lean()
    res.render('me/trash', { find });
  }
}

module.exports = new MeController();
