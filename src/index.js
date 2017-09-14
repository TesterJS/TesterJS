'use strict';
const path = require('path');
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
 *
 * @param {string} filePath - Path
 * @return {string} - Required file with the proper path
 */
function normalizeFilePath(filePath) {
  console.log('path: ', filePath);
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

module.exports.output = (fileOnePath, fileTwoPath, format) => {
  // We create a new Tester instance for every test defined in int the
  // file passed as argument to te performance tester tool

  const fileOne = normalizeFilePath(fileOnePath);
  // console.log(`listOfFiles ${fileOne}`);
  for ( let prop in fileOne) {
    if (fileOne.hasOwnProperty(prop) ) {
      // console.log(`fileOne[prop] ${fileOne[prop]}`);
      listOfTest.push(new SpeedTest(fileOne[prop]));
    }
  }

  const fileTwo = normalizeFilePath(fileTwoPath);
  // console.log(`fileTwo ${fileTwo}`);
  for ( let prop in fileTwo) {
    if (fileTwo.hasOwnProperty(prop) ) {
      // console.log(`fileOne[prop] ${fileTwo[prop]}`);
      listOfTest.push(new SpeedTest(fileTwo[prop]));
    }
  }

  executeTester(format);
};


