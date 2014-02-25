/*jshint node:true */
'use strict';

var path = require('path');

var pit = require('../index');

var dirFixtures = path.join(__dirname, 'fixtures');
var dirExpected = path.join(__dirname, 'expected');
var name = '';
var config = {};

exports.setUp = function (done) {
  pit.pitDir = dirFixtures;

  done();
};

exports.tearDown = function (done) {
  name = '';
  config = {};

  done();
};

exports.testGet = function (test) {
  test.expect(1);

  name = 'foo';
  config = pit.get(name, 'test');
  test.deepEqual(
    config,
    require(path.join(dirExpected, 'test'))
  );

  test.done();
};

exports.testGetDefault = function (test) {
  test.expect(1);

  name = 'bar';
  config = pit.get(name);
  test.deepEqual(
    config,
    require(path.join(dirExpected, 'default'))
  );

  test.done();
};
