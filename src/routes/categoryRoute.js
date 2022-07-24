const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');
const tokenValidation = require('../middlewares/validateToken');

router.post('/', tokenValidation, categoryController.createCategory);
router.get('/', tokenValidation, categoryController.getAllCategories);

module.exports = router;