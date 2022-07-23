const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/validateToken');

router.post('/', userController.createUser);
router.get('/', tokenValidation, userController.getAllUsers);

module.exports = router;