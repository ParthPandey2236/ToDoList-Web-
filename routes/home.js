
const express = require('express');

const Home = require('../controller/home');

const router = express.Router();

// const AddPost = require('../controller/add');
router.use('/delete',require('./delete'));
router.use('/add',require('./add'));
// router.post('/add',AddPost.add);

router.get('/',Home.callback);

module.exports = router;