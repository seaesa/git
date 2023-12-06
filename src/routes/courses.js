const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CoursesController');

router.get(`/create`, courseController.create);
router.post(`/store`, courseController.store);
router.post(`/:id/mutildelete`, courseController.mutildelete);
router.put(`/:id`, courseController.update);
router.patch(`/:id/restore`, courseController.restore);
router.get(`/:id/edit`, courseController.edit);
router.delete(`/:id`, courseController.delete);
router.delete(`/:id/destroy`, courseController.destroy);
router.get(`/:slug`, courseController.show);

module.exports = router;