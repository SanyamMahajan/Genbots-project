const express = require('express');
const router = express.Router();
const learningResourceController = require('../controllers/learningResourceController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/resources', learningResourceController.getAllLearningResources);
router.post('/resources', authMiddleware('admin'), learningResourceController.createLearningResource);

module.exports = router;
