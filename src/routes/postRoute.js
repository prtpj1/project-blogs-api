const express = require('express');

const router = express.Router();
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/validateToken');

router.get('/', tokenValidation, postController.getAllPosts);

module.exports = router;