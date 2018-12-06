{
  "name": "learn-javascript-transpilation-bct-npm-init",
  "version": "1.0.0",
  "description": "npm init tutorial",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

// How to specify a script in package.json that initiates the ES6+ to ES5 transpilation