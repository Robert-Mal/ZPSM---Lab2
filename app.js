const _ = require('lodash');

function calculateAverage(arrayOfNumbers) {
    return _.mean(arrayOfNumbers);
}

console.log(calculateAverage([1,2,3,34]));

function findMin(arrayOfNumbers) {
    return _.min(arrayOfNumbers);
}

function findMax(arrayOfNumbers) {
    return _.max(arrayOfNumbers);
}

console.log(findMin([1,2,3,4]));
console.log(findMax([1,2,3,4]));