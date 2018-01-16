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

console.log(filteredNames); // => ['Rich', 'Ray']
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




function hazardWarningCreator(typeOfWarning)
{
  let warningCounter = 0;

  return function(location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');


let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let forwardLeft = turtleMovements.filter(mvt => mvt[0] + mvt[1] < 0 === false);
console.log(forwardLeft);

let totalMovement = turtleMovements.map(mvt => mvt[0] + mvt[1]);
console.log(totalMovement);

let totalMovementForEach = turtleMovements.forEach(function(mvt) {
   console.log(mvt[0] + mvt[1]);  
});
console.log(totalMovementForEach);