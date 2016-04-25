'use strict';

var express = require('express');
var router = express.Router();

var moment = require('moment');
var Grade = require('../models/grade');

//  GET /
router.get('/', (req, res) => {
  Grade.get((err, grades) => {
    if(err) {
      res.render('error', {error: err})
    } else {

      // grades = grades.map(grade => {
      //   grade.gradeScore = moment(grade.gradeScore, 'X').format('l');
      //   grade.gradeName = moment(grade.gradeName, 'X').format('l');
        // return grades;
      // })

      res.render('home', {grades: grades});
    }
  })
})

module.exports = router;
