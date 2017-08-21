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

/*
*  The code a to test
*/
var testA = function(params) {
    var a = params[0];
    var b = params[1];
    var c = params[2];
    var d = params[3];
    var e = params[4];
    var f = params[5];
    var g = a + b + c + d + e + f;
}


/*
*  The code b to test
*/
var testB = function(params) {
 var c = params[0] + params[1] + params[2] + params[3] + params[4] + params[5];
}

/*
* Reduce
*/
var testC = function(params) {
    var total = params.reduce(function(sum, value) {
        return sum + value;
    }, 0);
}

/*
*  The a required params for the a implementation to test
*/
var paramsA = [5,6,7,8,9,10];


/*
*  The required b params for the b implementation to test
*/
var paramsB = [5,6,7,8,9,10];


/*
* 
*/
var paramsC = [5,6,7,8,9,10];


/* 
*  We create the speedTest using it's constructor for the 
*  implementation that we want to test
*/
var speedTestA = new SpeedTest(testA, paramsA, 500000);
var speedTestB = new SpeedTest(testB, paramsB, 500000);
var speedTestC = new SpeedTest(testC, paramsC, 500000);


speedTestA.executor();
// Show in console average time for execute this test
speedTestB.executor();
// Show in console average time for execute this test
speedTestC.executor();