'use strict';

module.exports = {
  testForLoopV1: function (params) {
    let total = 0;
    for (let i = 0; i < params.length; i++) {
      total += params[i];
    }
    return total;
  },
};


