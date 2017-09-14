'use strict';
const figlet = require('figlet');
const meow = require('meow');
const updateNotifier = require('update-notifier');
const log = console.log;
const colors = require('./config/colors');
const performanceTester = require('./');


const cli = meow(`
  Usage
    $ tester <file-to-test-one> <file-to-test-two>

  Options
    --format, -j     Output format: cli|json

  Examples
    $ foo foo.js bazinga.js --format=json
  `, {
    alias: {
      f: 'format',
    },
  });

updateNotifier({pkg: cli.pkg}).notify();

// This code should be added when Tester is prepared to receive a couple of files
if (!cli.input[0] || !cli.input[1]) {
  log(colors.error('Please you have to specify two files'));
  process.exit(1);
}

//  log(`This is how your cli looks --> cli.input[0]: ${cli.input[0]} and cli.flags: ${JSON.stringify(cli.flags)}`);

// const listOfTests = cli.input[0] ? require(path.resolve(cli.input[0])) : require('../default-tests/default-tests');

// const filesToTest = [cli.input[0], cli.input[1]];

log(colors.todo(
  figlet.textSync('TesterJS')
));

figlet('TesterJS', function(err, data) {
  if (err) {
    log(colors.error('Something went wrong...'));
    console.dir(err);
    return;
  }

  // TODO As we are in development process we are passing only one file: './demo-tests/demo-tests' or a single
  // file but in the next steps tester should accept a couple of files, and output method should receive this two files
  // and the flag
  // log(colors.information(`cli.input ${cli.input.length}`));
  performanceTester.output(cli.input, cli.flags.format);

  process.exit();
});
