'use strict';
const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');
const meow = require('meow');
const updateNotifier = require('update-notifier');
const SpeedTest = require('./tester');
const reporter = require('./reporter');
const colors = require('./config/colors');
const log = console.log;


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

//log(`This is how your cli looks --> cli.input[0]: ${cli.input[0]} and cli.flags: ${JSON.stringify(cli.flags)}`);

const defaultTests = cli.input[0] ? require(path.resolve(cli.input[0])) : require('./default-tests/default-tests');


/*
 *  We create the speedTest using its constructor for the implementation that we
 *  want to test
 */
let listOfTest = [];

for ( let prop in defaultTests) {
  if (defaultTests.hasOwnProperty(prop) ) {
    listOfTest.push(new SpeedTest(defaultTests[prop]));
  }
}


figlet('TesterJS', function(err, data) {
  if (err) {
    log(chalk.bold.red('Something went wrong...'));
    console.dir(err);
    return;
  }

  executeTester();
});

/**
 * Main function execute all tests
 */
function executeTester() {
  let i = 0;

  log(colors.todo(
    figlet.textSync('TesterJS')
  ));

  log(colors.log('TEST RESULTS'));

  for (; i < listOfTest.length; i += 1) {
    log('\n' + reporter.generateOutputStr(listOfTest[i].executor()));
  }
}
