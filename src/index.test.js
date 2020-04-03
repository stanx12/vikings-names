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
  });
});
