'use strict';
const SpeedTest = require('./app/tester');

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

/**
 * @description  Generic For loop
 */

var testD = function(params) {
  var total = 0;
  for(var i = 0; i < params.length; i++) {
    total += params[i];
  }
  return total;
}

/**
 * @description  Opmized Generic For loop
 */

var testE = function(params) {
  var total = 0,
      i = 0,
      max = params.length;
  for(; i < max; i += 1) {
    total += params[i];
  }
  return total;
}

/**
 * @description  Optimized Generic For loop
 */

var testF = function(params) {
  var i = params.length,
      total = 0;
  while(i--) {
    total += params[i];
  }
  return total;
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
var speedTestA = new SpeedTest(testA);
var speedTestB = new SpeedTest(testB);
var speedTestC = new SpeedTest(testC);
var speedTestD = new SpeedTest(testD);
var speedTestE = new SpeedTest(testE);
var speedTestF = new SpeedTest(testF);


speedTestA.executor();
// Show in console average time for execute this test
speedTestB.executor();
// Show in console average time for execute this test
speedTestC.executor();
// Show in console average time for execute this test
speedTestD.executor();
// Show in console average time for execute this test
speedTestE.executor();
// Show in console average time for execute this test
speedTestF.executor();