var uniqueRandomArray = require('unique-random-array');
var vikingsNames = require('./vikings-names.json');

module.exports = {
  all: vikingsNames,
  random: uniqueRandomArray(vikingsNames)
};
