const express = require('express');
const Delete = require('../controller/delete');
const router = express.Router();
console.log('inside delete route');
router.post('/', Delete.dle);
module.exports= router;