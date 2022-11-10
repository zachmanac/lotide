const findKeyByValue = function(shows, show) {
  const genres = Object.keys(shows);

  for (let genre of genres) {
    if (shows[genre].includes(show)) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;