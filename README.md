Pit RO
======

Read-only [pit](https://github.com/cho45/pit) for Node.js.


INSTALLATION
------------

    $ npm install pit-ro


QUICK USAGE
-----------

Load `foo` section from `~/.pit/default.yaml`:

    var pit = require('pit-ro');
    var config = pit.get('foo');

Load `bar` section from `~/.pit/another.yaml`:

    var pit = require('pit-ro');
    var config = pit.get('foo', 'another');

Load `buz` section from `config.yaml` in the current directory:

    var pit = require('pit-ro');
    pit.pitDir = './';
    var config = pit.get('buz', 'config');


LIMITATION
----------

READ ONLY.


LICENSE
-------

MIT: http://hail2u.mit-license.org/2013
