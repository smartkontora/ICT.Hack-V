const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/project', projectController.getAllProjects);

module.exports = router;
