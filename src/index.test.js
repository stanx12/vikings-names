const { expect } = require('chai');
const vikingsNames = require('./index');

describe('vikings-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const isArrayOfStrings =
        array => array.every(item => typeof item === "string")

      expect(vikingsNames.all).to.satisfy(isArrayOfStrings);
    });

    it("should contain `Ragnar Lothbrok`", () => {
      expect(vikingsNames.all).to.include("Ragnar Lothbrok");
    });
  });

  describe('random', () => {
    it("should return a random item from the vikingsNames.all", () => {
      const randomItem = vikingsNames.random();

      expect(vikingsNames.all).to.include(randomItem);
    });

    it("should return an array of random item if passed a number", () => {
      const randomItems = vikingsNames.random(3);
      expect(randomItems).to.have.lengthOf(3);

      randomItems.forEach(item => {
        expect(vikingsNames.all).to.include(item);
      });
    });
  });
});
