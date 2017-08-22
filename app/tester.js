'use strict';
/*
*  The SpeedTest constructor 
*  test: function that holds the implemented code to test
*  params: needed params for the test function
*/
function SpeedTest(test, params, num) {
   this.test = test;
   this.params = params;
   this.numOfTimes = num || 10000;
   this.average = 0;
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