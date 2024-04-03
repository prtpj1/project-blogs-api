const express = require('express');

const router = express.Router();

const userRoutes = require('./userRoute');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoute');
const postRoutes = require('./postRoute');

router.use('/login', authRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/post', postRoutes);

module.exports = router;