'use strict';
const figlet = require('figlet');
const chalk = require('chalk');
const SpeedTest = require('./tester');
const colors = require('./config/colors');
const log = console.log;

let listOfTest = [];

/**
 * Get the formatter required for the used
 *
 * @param {string} format - flag passed by user in cli
 * @return {string} - the required formatter
 */
function getReporter(format) {
  const formatter = format !== 'json' ? 'cli' : format;
  return require(`./formats/${formatter}`); // eslint-disable-line import/no-dynamic-require
}


/**
 * Execute every test a send the output object to the reporter
 * @param {string} format - Output format for performance
 */
function executeTester(format) {
  let i = 0;
  const reporter = getReporter(format);

  log(colors.todo(
    figlet.textSync('TesterJS')
  ));

  log(colors.log('TEST RESULTS'));

  for (; i < listOfTest.length; i += 1) {
    log(`\n ${reporter.generateOutputStr(listOfTest[i].executor())}`);
  }
}

module.exports.output = (testsInFile, format) => {
  // We create a new Tester instance for every test defined in int the
  // file passed as argument to te performance tester tool
  for ( let prop in testsInFile) {
    if (testsInFile.hasOwnProperty(prop) ) {
      listOfTest.push(new SpeedTest(testsInFile[prop]));
    }
  }

  figlet('TesterJS', function(err, data) {
    if (err) {
      log(chalk.bold.red('Something went wrong...'));
      console.dir(err);
      return;
    }

    executeTester(format);
    process.exit();
  });
};


