const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(tail(words));
assertEqual(words.length, 3);

const smallArray = [];
tail(smallArray);
console.log(tail(smallArray));
assertEqual(smallArray.length, 0);

const oneArray = ['one'];
tail(oneArray);
console.log(tail(oneArray));
assertEqual(oneArray.length, 1);