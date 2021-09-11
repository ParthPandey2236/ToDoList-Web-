const express = require('express');

const router = express.Router();

const AddPost = require('../controller/add');

router.post('/',AddPost.add);

module.exports = router;
