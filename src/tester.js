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
 * @return {object} - contains the result of the performance
 */
SpeedTest.prototype.executor = function() {
  const test = this.test;
  let i = this.numOfTimes,
    totalTime;
  const times = [];

  while (i--) {
    const timeStart = now();
    test(this.params);
    const timeEnd = now();
    totalTime = (timeEnd - timeStart);
    times.push(totalTime);
  }

  return {
    testTitle: this.test.name,
    numberOfExecutions: this.numOfTimes,
    average: calculateAverage(times),
    maxTime: Math.max.apply(null, times),
    minTime: Math.min.apply(null, times),
  };
};

/**
 * Given an array of times calc the average
 * @param  {Array} times Array of times for every execution
 * @return {Number}
 */
const calculateAverage = (times) => times.reduce((acc, current) => acc + current) / times.length;

module.exports = SpeedTest;
