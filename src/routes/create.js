const express = require('express');
const router = express.Router();
const createController = require('../app/controllers/CreateController');

router.use('/', createController.create);

module.exports = router;
