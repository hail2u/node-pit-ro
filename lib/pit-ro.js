/*jshint node: true*/
'use strict';

exports.version ='0.0.1';

var fs = require('fs'),
  path = require('path'),
  yaml = require('js-yaml');

var _getPitDir = function () {
  var dir = path.normalize(_getUserHome() + '/.pit');

  return dir;
};

var _getUserHome = function () {
  var home = (process.platform === 'win32') ? 'USERPROFILE' : 'HOME';

  return process.env[home];
};

exports.get = function (name, profile) {
  if (!profile) {
    profile = 'default';
  }

  var configFile = exports.pitDir + path.sep + profile + '.yaml';
  var config = yaml.safeLoad(fs.readFileSync(configFile, 'utf8'), {
    filename: configFile
  });

  return config[name];
};

exports.pitDir = _getPitDir();
