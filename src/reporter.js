'use strict';
const chalk = require('chalk');
const colors = require('./config/colors.js');

const generateOutputStr = function(info) {
  return colors.title('Test title: ' + info.testTitle) + '\n' +
    colors.pass('Best time: ' + info.minTime + ' ms.') + '\n' +
    colors.error('Worst time: ' + info.maxTime + ' ms.') + '\n' +
    colors.information('Number of executions: ' + info.numberOfExecutions) + '\n' +
    colors.information('Average: ' + info.average);
};

module.exports = {
  generateOutputStr
};
