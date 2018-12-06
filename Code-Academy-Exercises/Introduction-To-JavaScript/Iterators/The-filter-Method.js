const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const smallNumbers = randomNumbers.filter((val) => {
  return val < 250;
});

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

// .filter() returns an array of elements after filtering out certain elements from the original array