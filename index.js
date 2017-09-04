'use strict';
const figlet = require('figlet');
const chalk = require('chalk');
const SpeedTest = require('./app/tester');
const defaultTests = require('./app/default-tests/default-tests');


/*
*  We create the speedTest using its constructor for the implementation that we
*  want to test
*/
const speedTestA = new SpeedTest(defaultTests.testA);
const speedTestB = new SpeedTest(defaultTests.testB);
const speedTestC = new SpeedTest(defaultTests.testC);
const speedTestD = new SpeedTest(defaultTests.testD);
const speedTestE = new SpeedTest(defaultTests.testE);
const speedTestF = new SpeedTest(defaultTests.testF);

for ( let prop in  defaultTests) {
  console.log(`obj.${prop} = ${defaultTests[prop]}`);
}


figlet('TesterJS', function(err, data) {
  if (err) {
    console.log(chalk.bold.red('Something went wrong...'));
    console.dir(err);
    return;
  }

  executeTests();

});

function executeTests() {
  console.log(chalk.blue(
    figlet.textSync('TesterJS')
  ));

  const tests = [
    speedTestA,
    speedTestB,
    speedTestC,
    speedTestD,
    speedTestE,
    speedTestF
  ];

  console.log(chalk.bold.blue('TEST RESULTS'));

  for(let i = 0; i < tests.length; i += 1) {
    tests[i].executor();
  }
}


