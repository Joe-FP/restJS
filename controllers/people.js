const express = require('express');
const peopleRouter = new express.Router();

let people = ['Joe', 'Dave', 'Sarah'];

peopleRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: people[index]});
});

peopleRouter.get('/', function(req, res){
  res.json(people);
});

peopleRouter.post('/', function(req, res){
  people.push(req.body.person);
  res.json(people);
});

peopleRouter.put('/:id', function(req, res){
  let index = req.params.id;
  people[index] = req.body.person;
  res.json({data: people});
});

peopleRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  people.splice(index, 1);
  res.json(people);
});

module.exports = peopleRouter;
