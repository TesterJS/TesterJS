'use strict';

const generateOutputStr = (info) => {
  return JSON.stringify({
    results: info,
  }, null, 2);
};


module.exports = {
  generateOutputStr,
};
