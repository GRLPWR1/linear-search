const { linearSearch, globalLinearSearch } = require('../linear-search');

describe("linearSearch()", function() {
  it("returns first index of item in array", function() {
    let item = 3;
    let arr = [1,2,3,4,5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
  it("returns ony the 1st index and ignores the rest if the item is found more than once", function(){
    let item = 3;
    let arr = [1,2,3,4,5,3];
    expect(linearSearch(item, arr)).not.toBe([2, 5]);
    expect(linearSearch(item, arr)).not.toEqual(5);
  });
  it("returns -1 if cannot find the item in the array", function(){
    let item = 6
    let arr = [1,2,3,4,5];
    expect(linearSearch(item, arr)).toEqual(-1);
  });
});

describe("globalLinearSearch()", function() {
  it("returns an array of indices of items in the array", function() {
    let item = 'a';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
  });
  it("returns -1 if cannot find the item in the array",() => {
    let item = 'z';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toBe(-1);
    expect(globalLinearSearch(item, arr)).not.toBe([]);
    expect(globalLinearSearch(item, arr)).not.toBe(undefined);
  });
});
