let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.')
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();


// Object methods are invoked by appending the object's name with the dot operator followed by the method name and parentheses