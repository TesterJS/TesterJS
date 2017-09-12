'use strict';
const colors = require('../config/colors.js');

const generateOutputStr = function(info) {
  return [
    colors.title('Test title: ' + info.testTitle),
    colors.pass('Best time: ' + info.minTime + ' ms.'),
    colors.error('Worst time: ' + info.maxTime + ' ms.'),
    colors.duration('Number of executions: ' + info.numberOfExecutions),
    colors.information('Average: ' + info.average + ' ms.')
  ].join('\n');
};

module.exports = {
  generateOutputStr,
};
