'use strict';

var Mocha = require('mocha');

var mocha = new Mocha();

mocha.addFile('test/unit/sample');

mocha.run(function(failures) {
  process.on('exit', function() {
    process.exit(failures);
  });
});
