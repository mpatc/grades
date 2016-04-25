'use strict';

var express = require('express');
var router = express.Router();

var Grade = require('../models/grade');

//   /api/grades
router.route('/')
  .get((req, res) => {

    Grade.get((err, grades) => {
      if(err) {
        return res.status(400).send(err);
      }

      res.send(grades);
    });
  })
  .post((req, res) => {
    // req.body  -->  { max: ??, dueDate: ?? }
    Grade.create(req.body, err => {
      console.log("to home.ejs[req.body]: ", req.body)
      if(err) {
        return res.status(400).send(err);
      }
      Grade.get((err, grades) => {
        if(err) {
          return res.status(400).send(err);
        }

      res.send(grades);
      })
    });
  })
  .delete((req, res) => {
    Grade.delete(req.body, err => {
      if(err) {
        return res.status(400).send(err);
    }
    res.send();
  })
})


module.exports = router;
