const _ = require('lodash');

function calculateAverage(arrayOfNumbers) {
    return _.mean(arrayOfNumbers);
}

console.log(calculateAverage([1,2,3,34]));