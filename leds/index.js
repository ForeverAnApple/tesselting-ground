'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');

var greenPin = tessel.port.A.pin[0];
var redPin = tessel.port.A.pin[1];
greenPin.write(1, (error, buffer) => {
	if(error){
		throw error;
	}

	console.log(buffer.toString());
});

// Blink!
setInterval(() => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();

  greenPin.toggle((error, buffer) => {
    if (error) {
      throw error;
    }

    console.log(buffer.toString()); // Log the value written to the pin
  });

  redPin.toggle((error, buffer) => {
    if (error) {
      throw error;
    }

    console.log(buffer.toString()); // Log the value written to the pin
  });
}, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");
