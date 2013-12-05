/*jshint node: true*/
'use strict';

var fs = require('fs'),
  path = require('path'),
  yaml = require('js-yaml');

exports.version ='0.0.1';
exports.pitDir = _getPitDir();

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

function _getPitDir() {
  var dir = path.normalize(_getUserHome() + '/.pit');

  return dir;
}

function _getUserHome() {
  var home = (process.platform === 'win32') ? 'USERPROFILE' : 'HOME';

  return process.env[home];
}
