var redLED = LED1; // On Puck.js, LED1 is red
var isRedLEDOn = false; // Variable to track the LED's state

function toggleRedLED() {
  isRedLEDOn = !isRedLEDOn; // Toggle the state
  digitalWrite(redLED, isRedLEDOn); // Set LED according to the state
}

// Set up a button press event listener
setWatch(toggleRedLED, BTN, { repeat: true, edge: "rising", debounce: 50 });
