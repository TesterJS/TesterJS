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

log(colors.todo(
  figlet.textSync('TesterJS')
));

figlet('TesterJS', function(err, data) {
  if (err) {
    log(colors.error('Something went wrong...'));
    console.dir(err);
    return;
  }
  
  performanceTester.output(cli.input, cli.flags.format);

  process.exit();
});
