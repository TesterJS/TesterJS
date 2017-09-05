'use strict';

const chalk = require('chalk');
const now = require('performance-now');
const defaultConfig = require('./config/config');

/**
 * @constructor
 * @description The SpeedTest constructor
 * @param {Object} test - Test function to launch
 * @param {Object} config - Configuration passed to test. If no configuration
 * is passed Test will be launch with the default configuration
 */
function SpeedTest(test, config) {
  const testConfig = config || defaultConfig;
  this.test = test;
  this.params = testConfig.params;
  this.numOfTimes = testConfig.numOfTimes;
}

/**
 * @description The SpeedTest constructor prototype that holds the SpeedTest
 * executor
 */
SpeedTest.prototype = {
  executor: function() {
    let i = this.numOfTimes;
    const timeStart = now();

    while (i--) {
      this.test(this.params);
    }

    const timeEnd = now();
    console.log(chalk.yellow('Total time ' +
        this.test.name + ' ' + (timeEnd - timeStart).toFixed(3) + ' ms.'
    ));
  },
};

module.exports = SpeedTest;
