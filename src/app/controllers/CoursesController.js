const Cource = require('../model/Cource');
class CoursesController {
  // [get] /courses/:slug
  async show(req, res) {
    const courses = await Cource.findOne({ slug: req.params.slug }).lean();
    res.render(`courses/show`, { courses });
  }
  // [get] create
  create(req, res, next) {
    res.render('courses/create');
  }
  // [post] store
  async store(req, res, next) {
    try {
      await Cource.create(req.body);
      res.redirect('/');
    } catch (error) {
      res.send(error);
    }
  }
  async edit(req, res, next) {
    const id = await Cource.findById(req.params.id).lean()
    res.render('courses/edit', { id });
  }
  async update(req, res, next) {
    try {
      await Cource.updateOne({ _id: req.params.id }, req.body);
      res.redirect('/me/stored/courses');
    } catch (error) {
      res.send(error)
    }
  }
  async delete(req, res, next) {
    try {
      await Cource.delete({ _id: req.params.id });
      res.redirect('back');
    } catch (error) {
      res.send(req.params);
    }
  }
  async destroy(req, res, next) {
    try {
      await Cource.deleteOne({ _id: req.params.id }, req.body);
      res.redirect('back');
    } catch (error) {
      res.send(error);
    }
  }
  async restore(req, res, next) {
    try {
      await Cource.restore({ _id: req.params.id });
      res.redirect('back');
    } catch (error) {
      res.send(error);
    }
  }
  mutildelete(req, res, next) {
    try {
      const arr = req.params.id.split(',')
      arr.forEach(async (course) => {
        await Cource.delete({ _id: course });
      })
      res.redirect('back');
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = new CoursesController();
