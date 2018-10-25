'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');
var rand = 0;
var greenPin = tessel.port.A.pin[0];
var redPin = tessel.port.A.pin[1];
var yellowPin = tessel.port.A.pin[2];

// Blink!
rand = Math.floor(Math.random() * 1001 + 100);
setInterval(() => {
  tessel.led[2].toggle();
}, rand);

rand = Math.floor(Math.random() * 1001 + 100);
setInterval(()=> {
  tessel.led[3].toggle();
}, rand);

rand = Math.floor(Math.random() * 1001 + 100);
setInterval(()=> {
  greenPin.toggle((error, buffer) => {
    if (error) {
      throw error;
    }

    console.log(buffer.toString('hex')); // Log the value written to the pin
  });
}, rand);

rand = Math.floor(Math.random() * 1001 + 100);
setInterval(()=> {
  redPin.toggle((error, buffer) => {
    if (error) {
      throw error;
    }

    console.log(buffer.toString('hex')); // Log the value written to the pin
  });
}, rand);

rand = Math.floor(Math.random() * 1001 + 100);
setInterval(()=> {
  yellowPin.toggle((error, buffer) => {
    if (error) {
      throw error;
    }

    console.log(buffer.toString('hex')); // Log the value written to the pin
  });
}, rand);

console.log("I'm blinking! (Press CTRL + C to stop)");
