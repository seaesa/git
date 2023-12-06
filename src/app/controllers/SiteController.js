const Cource = require('../model/Cource');
class SiteController {
  async index(req, res, next) {
    const cources = await Cource.find({}).lean();
    res.render(`home`, { cources })
  }
  search(req, res) {
    res.render(`search`);
  }
}

module.exports = new SiteController();
