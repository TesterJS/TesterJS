'use strict';

const generateOutputStr = (info) => {
  return JSON.stringify({
    results: info,
  }, null, 1);
};


module.exports = {
  generateOutputStr,
};
