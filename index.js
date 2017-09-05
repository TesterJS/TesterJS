'use strict';
const figlet = require('figlet');
const chalk = require('chalk');
const SpeedTest = require('./app/tester');
const defaultTests = require('./app/default-tests/default-tests');


/*
*  We create the speedTest using its constructor for the implementation that we
*  want to test
*/
let listOfTest = [];

for ( let prop in  defaultTests) {
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

function executeTester() {
  let i = 0;

  console.log(chalk.blue(
    figlet.textSync('TesterJS')
  ));

  console.log(chalk.bold.blue('TEST RESULTS'));

  for (; i < listOfTest.length; i += 1) {
    listOfTest[i].executor();
  }
}


