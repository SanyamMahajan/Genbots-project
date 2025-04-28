const express = require('express');
const router = express.Router();
const patentConsultationController = require('../controllers/patentConsultationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/consultations', patentConsultationController.getAllPatentConsultations);
router.post('/consultations', authMiddleware('admin'), patentConsultationController.createPatentConsultation);

module.exports = router;
