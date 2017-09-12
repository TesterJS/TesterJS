'use strict';
const path = require('path');
const meow = require('meow');
const updateNotifier = require('update-notifier');
const performanceTester = require('./');


const cli = meow(`
  Usage
    $ tester <file-to-test-one> <file-to-test-two>

  Options
    --format, -j     Output format: cli|json|tap

  Examples
    $ foo foo.js bazinga.js --format=json
  `, {
    alias: {
      f: 'format',
    },
  });

updateNotifier({pkg: cli.pkg}).notify();

// This code should be added when Tester is prepared to receive a couple of files
// if (!cli.input[0] || !cli.input[1]) {
//   console.error('Please you have to specify two files');
//   process.exit(1);
// }

//  log(`This is how your cli looks --> cli.input[0]: ${cli.input[0]} and cli.flags: ${JSON.stringify(cli.flags)}`);

const listOfTests = cli.input[0] ? require(path.resolve(cli.input[0])) : require('./default-tests/default-tests');


performanceTester.output(listOfTests);
