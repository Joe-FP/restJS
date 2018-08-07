const express = require('express');
const carRouter = new express.Router();

let cars = ['Toyota', 'Jeep', 'Ford'];

carRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: cars[index]});
});

carRouter.get('/', function(req, res){
  res.json(cars);
});

carRouter.post('/', function(req, res){
  cats.push(req.body.car);
  res.json(cars);
});

carRouter.put('/:id', function(req, res){
  let index = req.params.id;
  cars[index] = req.body.car;
  res.json({data: cars});
});

carRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  cats.splice(index, 1);
  res.json(cars);
});

module.exports = carRouter;
