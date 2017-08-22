'use strict';
const defaultConfig = require('./config/Config');
/*
*  The SpeedTest constructor 
*  test: function that holds the implemented code to test
*  params: needed params for the test function
*/
function SpeedTest(test, config) {
   const testConfig = config || defaultConfig;
   this.test = test;
   this.params = testConfig.params;
   this.numOfTimes = testConfig.numOfTimes;
}

/*
*  The SpeedTest constructorprototype that holds the 
*  SpeedTest executor
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