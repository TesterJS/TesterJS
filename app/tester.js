'use strict';
const defaultConfig = require('./config/config');

/**
 * @description The SpeedTest constructor
 * @param {Function} - Test to launch
 * @param {Object}[optional] - Configuration passed to test. If no configuration is passed Test will be launch with
 * the default configuration
 */
function SpeedTest(test, config) {
   const testConfig = config || defaultConfig;
   this.test = test;
   this.params = testConfig.params;
   this.numOfTimes = testConfig.numOfTimes;
}

/**
 * @description The SpeedTest constructor prototype that holds the SpeedTest executor
 */
SpeedTest.prototype = {
  executor: function() {
    var dateInit, dateEnd, totalTime = 0,
       i = this.numOfTimes;
    console.time('Total time ' + this.test.name);
    while(i--) {
      this.test(this.params);
    }
    console.timeEnd('Total time ' + this.test.name);
 }
}

module.exports = SpeedTest
