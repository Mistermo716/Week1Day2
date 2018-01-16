'use strict';

function repeat(fn, num) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}

function hello() {
  {
    console.log('Hello World');
  }
}

function goodbye() {
  {
    console.log('Goodbye World');
  }
}

repeat(hello,5);
repeat(goodbye,5);


// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
