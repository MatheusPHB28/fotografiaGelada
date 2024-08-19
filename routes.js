const express = require('express');
const router =express.Router();
const  controllersFG =require('../controller/controlersFG.js')

router.post('/', controllersFG.addInfo);

module.exports = router;