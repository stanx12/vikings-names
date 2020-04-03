const uniqueRandomArray = require('unique-random-array');
const vikingsNames = require('./vikings-names.json');

const getRandomItem = uniqueRandomArray(vikingsNames);

const random = (number) => {
  if(number === undefined) {
    return getRandomItem();
  } else {
    let randomItems = [];
    for(let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
};

module.exports = {
  all: vikingsNames,
  random
};
