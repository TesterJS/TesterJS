'use strict';
const path = require('path');
const SpeedTest = require('./tester');
const colors = require('./config/colors');
const log = console.log;

const listOfTest = [];

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
 *
 * @param {string} filePath - Path
 * @return {string} - Required file with the proper path
 */
function normalizeFilePath(filePath) {
  return require(path.resolve(filePath));
}

/**
 * Execute every test a send the output object to the reporter
 * @param {string} format - Output format for performance
 */
function executeTester(format) {
  let i = 0;
  const reporter = getReporter(format);

  log(colors.log('TEST RESULTS'));

  for (; i < listOfTest.length; i += 1) {
    log(`\n ${reporter.generateOutputStr(listOfTest[i].executor())}`);
  }
}

module.exports.output = (filesPath, format) => {
  filesPath.forEach( (filePath) => {
    log(colors.information(filePath));
    const file = normalizeFilePath(filePath);
    for ( const prop in file) {
      if (file.hasOwnProperty(prop) ) {
        // We create a new Tester instance for every test passed
        listOfTest.push(new SpeedTest(file[prop]));
      }
    }
  });

  executeTester(format);
};


