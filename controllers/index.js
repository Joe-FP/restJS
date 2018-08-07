const express = require('express');
const router = new express.Router();

router.use('/cars', require('./cars'));
router.use('/people', require('./people'));

router.get('/', function(req, res){
  res.json({data: 'Home'})
});

module.exports = router;
