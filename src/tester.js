'use strict';
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
  this.test = test;
  const testConfig = config || defaultConfig;
  this.params = (typeof testConfig.params === 'undefined') ? defaultConfig.params : testConfig.params;
  this.numOfTimes = (typeof testConfig.numOfTimes === 'undefined') ? defaultConfig.numOfTimes : testConfig.numOfTimes;
}

/**
 * @description The SpeedTest constructor prototype that holds the SpeedTest
 * executor
 */
SpeedTest.prototype = {
  executor: function() {
    let i = this.numOfTimes,
      times = [],
      totalTime,
      maxTime,
      minTime;

    while (i--) {
      const timeStart = now();
      this.test(this.params);
      const timeEnd = now();
      totalTime = (timeEnd - timeStart);
      times.push(totalTime);
    }

    maxTime = Math.max.apply(null, times);
    minTime = Math.min.apply(null, times);

    return {
      testTitle: this.test.name,
      numberOfExecutions: this.numOfTimes,
      average: calcAvg.call(this, times),
      maxTime,
      minTime,
    };
  },
};

/**
 * Given an array of times calc the average
 * @param  {Array} times Array of times for every execution
 * @return {Number}
 */
function calcAvg(times) {
  let sum = 0,
    i = 0,
    max = times.length;
  for ( ; i < max; i += 1 ) {
    sum += times[i];
  }

  return (sum / max);
}

module.exports = SpeedTest;
