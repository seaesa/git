const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.use(`/stored/courses`, meController.storedCourse);
router.get(`/trash/courses`, meController.trash);

module.exports = router;
