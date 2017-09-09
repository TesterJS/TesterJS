'use strict';
const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');
const meow = require('meow');
const SpeedTest = require('./tester');
const reporter = require('./reporter');
const colors = require('./config/colors');


const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`, {
    alias: {
      f: 'file',
    },
  });


// console.log(`cli.input[0]: ${cli.input[0]} and cli.flags: ${cli.flags}`);

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
    console.log(chalk.bold.red('Something went wrong...'));
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

  console.log(colors.todo(
    figlet.textSync('TesterJS')
  ));

  console.log(colors.log('TEST RESULTS'));

  for (; i < listOfTest.length; i += 1) {
    console.log('\n' + reporter.generateOutputStr(listOfTest[i].executor()));
  }
}
