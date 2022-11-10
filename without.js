const without = function(sourceArray, itemsToRemove) {
  
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (itemsToRemove.includes(sourceArray[i]) === false) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

module.exports = without;