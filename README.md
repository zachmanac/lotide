# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zachmanac/lotide`

**Require it:**

`const _ = require('@zachmanac/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of array
* `tail(array)`: return array without first element
* `middle(array)`: returns array without first and last element
* `countLetters(string)`: returns character with matching count
* `countOnly(array, element)`: returns count of element selected in array
* `findKey(object, callback)`: returns first key of object based on element selected
* `findKeyByValue(array, element)`: returns key based on element selected
* `flatten(array)`: removes one level of array in nested array
* `letterPositions(string)`: returns positions of characters in a string
* `map(array, callback)`: creates new array with altered effects on each element
* `takeUntil(array, callback)`: returns array until callback parameter not met
* `without(array, element)`: returns array excluding element selected