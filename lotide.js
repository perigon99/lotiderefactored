//Check if 2 arrays are equals
const eqArrays = (firstArray, secondArray) => {
  //Filtering of array on unevent length
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    } else {
      return true;
    }
  }
};
 
//Receive check condition ouput text depending if input is true of false
const assertArrayEqual = (condition) => {
   if(condition) {
     return 'PASS'
   } else {
     'FAIL'
   } 
};

//Scan the input to find the middle element, if more than 5 and even output 2 elements
const middle = (input) => {
  let center = [];
  if (input.length % 2 === 0 && input.length > 3) {
    let centerIndex = input.length;
    centerIndex = (centerIndex / 2);
    center.push(input[centerIndex - 1]);
    center.push(input[centerIndex]);
    return center;
  }
  if (input.length % 2 !== 0) {
    let centerIndex = input.length;
    centerIndex = (centerIndex / 2) - 0.5;
    center.push(input[centerIndex]);
    return center;
  } else {
    return center;
  }
};

//Bacis comarison check is two input are equal, does not work on array expect if another method return each iteration seperatry
const assertEqual = (actual, expected) => {
  if (eqArrays) {
    return console.log(`✅✅✅ Assersion Passed: [${actual}] === [${expected}]`);
  } else {
    return console.log(`🛑🛑🛑 Assersion Failed: [${actual}] === [${expected}]`);
  }
};

//Reveive and array and a function, then it applay the function on each iteration inside the array
const map = (array, callback) => {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

//Object comparaison tool that verbose a console.log
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  const keyOfObject1 = Object.keys(object1);
  const keyOfObject2 = Object.keys(object2);
  keyOfObject1.sort();
  keyOfObject2.sort();
  if (keyOfObject1.length !== keyOfObject2.length) {
    return console.log(`🛑🛑🛑 Assersion Failed: [${keyOfObject1}] !== [${keyOfObject2}]`);
  }
  for (let i = 0; i < keyOfObject1.length; i++) {
    // console.log("first for")
    if (keyOfObject1[i] === keyOfObject2[i]) {
      // console.log("second if")
      if (!eqArrays(object1[keyOfObject1[i]], object2[keyOfObject2[i]])) {
        return console.log(`🛑🛑🛑 Assersion Failed: [${keyOfObject1}] === [${keyOfObject2}]`);
      }
    }
  }
  return console.log(`✅✅✅ Assersion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
};
 
//Count the number of letter in a string, empty space count as letter
const countLetters = (strinInput) => {
  const result = {};
  for (let letter of strinInput) {
    if (result[letter] !== undefined) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

//Count the occurences of itemToCount in the input allItem
const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      // if item has already been added to results
      if (result[item] !== undefined) {
        result[item] += 1;
      // item is not in results so set it to one
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

//Basic check to see it 2 object are equals
const eqObjects = (object1, object2) => {
  const keyOfObject1 = Object.keys(object1);
  const keyOfObject2 = Object.keys(object2);
  keyOfObject1.sort();
  keyOfObject2.sort();
  if (keyOfObject1.length !== keyOfObject2.length) {
    return false;
  }
  for (let i = 0; i < keyOfObject1.length; i++) {
    if (keyOfObject1[i] === keyOfObject2[i]) {
      if (!eqArrays(object1[keyOfObject1[i]], object2[keyOfObject2[i]])) {
        return false;
      }
    }
  }
  return true;
};

//Return the element(key) in a object where callback applied to this element is true
const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (let element of keys) {
    if (callback(object[element])) {
      return element;
    }
  }
};

//Return the genre(Value) in a object where callback applied to this element is true
const findKeyByValue = (object, value) => {
  //It should scan the object and return the first key which contains the given value
  let result = [];
  for (let genre in object) {
    if (object[genre] === value) {
      result.push(genre);
    }
  } return result;
};

//Return the first element of a string or and array
const head = (input) => {
  return input[0];
};

//Return in witch key each letter in the sentence is found
const letterPositions = (sentence) => {
  const result = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (result[sentence[i]] === undefined) {
      result[sentence[i]] = [];
    }
    result[sentence[i]].push(i);
  }
  return result;
};

//Return everything exept the head of an input
const tail = (input) => {
  let triming = [];
  for (let i = 2; input.length > i; i++) {
    triming.push(input[i]);
  } return triming.join();
};

//Return a reverse version of the input
const reverse = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i ++) {
    result.push(input[i]);
  } return console.log(result);
};

//Return every iteration of an array until the callback return false
const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};

//Return a list where all the elements to filter out are not included
const without = (list, elementToFilterOut) => {
  let result = [];
  for (let element in list) {
    if (!elementToFilterOut.includes(list[element])) {
      result.push(list[element]);
    }
  } return result;
};


module.exports = {
  assertArrayEqual,
  middle,
  eqArrays,
  assertEqual,
  map,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  head,
  letterPositions,
  tail,
  reverse,
  takeUntil,
  without
};