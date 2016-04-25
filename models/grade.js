'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS grades (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          gradeName text,
          gradeScore INT,
          max INT
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM grades', cb);
};

exports.create = function(grade, cb) {
  console.log("grade:", grade)
  if(!grade.gradeScore || !grade.max) {
    return cb('Missing required field.')
  }


  db.run('INSERT INTO grades (gradeName, gradeScore, max) VALUES (?, ?, ?)',
    grade.gradeName,
    grade.gradeScore,
    grade.max,
    cb);
};

exports.delete = function(grade, cb) {
  db.run('DELETE FROM grades WHERE id = ?', grade.id)

}
