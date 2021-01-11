const chai = require('chai'); // 1
const assert = chai.assert;

const _ =require('../lotide.js');

describe('head', function () {
 it("Should return the fist element in the input", function() {
  const input = "hello";
  const expectedOutput = "h";
  assert.equal(_.head(input), expectedOutput); 
  });

  it("Should return 1", function() {
        assert.strictEqual(_.head([1,2,3]), 1); 
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(_.head(['5']), '5'); 
  });
});
 
describe('tail', function () {
  it("Should return everithing exept the first element (usualy work with arvg so we need to strip the first 2 elements)", function() {
   const input = "hello";
   const expectedOutput = "l,l,o";
   assert.deepStrictEqual(_.tail(input), expectedOutput); 
   });
 });

describe('eqArray', function () {
  it("Should return true if two arrays are equals)", function() {
    const check =_.eqArrays([1, 2, 3], [1, 2, 3]); 
    assert.isTrue(check); 
   });
 });

 describe('without', function () {
  it("Should strip all element in the input that are specified in the second parameter)", function() {
    const input =[1, 2, 3]
    const parameter = [1]
    const expectedOutput = [2, 3];
    assert.deepStrictEqual(_.without(input, parameter), expectedOutput);
   });
 });

 describe('eqObject', function () {
  it("Should return true if 2 object are identical)", function() {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: "2" };
    assert.isTrue(_.eqObjects(ab,ba));
   });
 });

 describe('Middle', function () {
  it("Should return true if 2 object are identical)", function() {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];
    assert.deepEqual(_.middle(input), expectedOutput);
   });
 });

