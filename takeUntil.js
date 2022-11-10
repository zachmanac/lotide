
const takeUntil = function(array, callback) {
  
  const results = [];
  
  let i = 0;
  while (callback(array[i]) === false) {
    results.push(array[i]);
    i++;
  }

  return results;
};

module.exports = takeUntil;