const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
};

robot.checkEnergy();

// Avoid using arrow functions when using this in a method