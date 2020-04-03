const uniqueRandomArray = require('unique-random-array');
const vikingsNames = require('./vikings-names.json');

module.exports = {
  all: vikingsNames,
  random: uniqueRandomArray(vikingsNames)
};
