# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @periogn/lotide`

**Require it:**

`const _ = require('@perigon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArrayEqual)`: Receive check condition ouput text depending if input is true of false
* `function2(assertEqual)`: Bacis comarison check is two input are equal, does not work on array expect if another method return each iteration seperatry
* `function3(assertObjectEqual)`: Object comparaison tool that verbose a console.log
* `function1(countLeters)`: Count the number of letter in a string, empty space count as letter
* `function2(countOnly)`: Count the occurences of itemToCount in the input all Items
* `function3(eqArray)`: Check if 2 arrays are equals
* `function1(eqObject)`: Basic check to see it 2 object are equals
* `function2(findKey)`: Return the element 'key' in a object where callback applied to this element is true
* `function3(findKeyByValue)`: Return the genre 'Value' in a object where callback applied to this element is true
* `function1(head)`: Return the first element of a string or and array
* `function2(tail)`: Return everything exept the head of an input
* `function3(letterPositions)`: Return in witch key each letter in the sentence is found
* `function1(middle)`: Scan the input to find the middle element, if more than 5 and even output 2 elements
* `function2(map)`: Receive and array and a function, then it applay the function on each iteration inside the array
* `function3(reverse)`: Return a reverse version of the input
* `function1(takeUntil)`: Return every iteration of an array until the callback return false
* `function2(without)`: Return a list where all the elements to filter out are not included
