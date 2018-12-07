console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

// How AJAX works and that JavaScript uses an event loop to handle asynchronous function calls