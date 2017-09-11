'use strict';

const defaultTests = {
  /**
   * @description The aim idea of this function is to create a variable for
   * every.
   * param value which contains the value of it.
   * @param {Array} params - List of values to be added and get a the total
   * @return {Number} total
   */
  testA: function(params) {
    let a = params[0];
    let b = params[1];
    let c = params[2];
    let d = params[3];
    let e = params[4];
    let f = params[5];
    let g = a + b + c + d + e + f;
    return g;
  },
  /**
   * @description
   * @param {Array} params - List of values to be added and get a the total
   * @return {Number} total
   */
  testB: function(params) {
    const c = params[0] + params[1] + params[2] + params[3] + params[4] + params[5];
    return c;
  },
  /**
   * Reduce method
   * @return {Number} sum
   */
  testC: function(params) {
    return params.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  },
  /**
   * @description  Generic For loop
   * @return {Number} total
   */
  testD: function(params) {
    let total = 0;
    for (let i = 0; i < params.length; i++) {
      total += params[i];
    }
    return total;
  },
  /**
   * @description  Optimized Generic For loop
   * @return {Number} total
   */
  testE: function(params) {
    const max = params.length;
    let total = 0,
      i = 0;
    for (; i < max; i += 1) {
      total += params[i];
    }
    return total;
  },
  /**
   * @description  Optimized Generic For loop
   * @return {Number} total
   */
  testF: function(params) {
    let i = params.length,
      total = 0;
    while (i--) {
      total += params[i];
    }
    return total;
  },
};

module.exports = defaultTests;
