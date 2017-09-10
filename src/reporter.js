'use strict';
const colors = require('./config/colors.js');

const generateOutputStr = function(info) {
  return colors.title('Test title: ' + info.testTitle) + '\n' +
    colors.pass('Best time: ' + info.minTime + ' ms.') + '\n' +
    colors.error('Worst time: ' + info.maxTime + ' ms.') + '\n' +
    colors.duration('Number of executions: ' + info.numberOfExecutions) + '\n' +
    colors.information('Average: ' + info.average + ' ms.');
};

module.exports = {
  generateOutputStr,
};
