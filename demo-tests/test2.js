'use strict';

module.exports  = {
  testForOptimized: function(params) {
    const max = params.length;
    let total = 0,
      i = 0;
    for (; i < max; i += 1) {
      total += params[i];
    }
    return total;
};


