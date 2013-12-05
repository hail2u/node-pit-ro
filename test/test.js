var pit = require('../index');
pit.pitDir = __dirname;

exports.testGet = function (test) {
  var name = 'foo';
  var config = pit.get(name, 'test');
  test.deepEqual(config, { 'a': 'A', 'b': 'B' }, 'get configuration data `' + name + '` from `test.yaml`');
  test.done();
};

exports.testGetDefault = function (test) {
  var name = 'bar';
  var config = pit.get(name);
  test.deepEqual(config, { 'c': 'C', 'd': 'D' }, 'get configuration data `' + name + '` from default config file');
  test.done();
};
