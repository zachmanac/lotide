const middle = function(array) {
  
  let middleElement = [];
  
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return middleElement;
  }
  if (array.length % 2 === 1) {
    let midIndexOdd = ((array.length / 2) - 0.5);
    middleElement.push(array[midIndexOdd]);
  }
  if (array.length % 2 === 0) {
    let midIndexHigh = (array.length / 2);
    let midIndexLow = ((array.length / 2) - 1);
    middleElement.push(array[midIndexLow]);
    middleElement.push(array[midIndexHigh]);
  }
  return middleElement;
};

module.exports = middle;