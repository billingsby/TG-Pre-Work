const bobsFollowers = ['Tom', 'Daniel', 'Harry', 'Loyd'];
const tinasFollowers = ['Tom', 'Harry', 'Sam'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};


// Nested loops are loops running inside of another loop