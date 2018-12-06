const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();

// Use factory functions to create many instances of an object quickly. A factory function is a function that returns an object and can be reused to make multiple object instances.