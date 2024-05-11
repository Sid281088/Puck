var led = LED1; // LED to control (LED1 is red)
var flipCount = 0; // Counter for flips
var threshold = 1; // Acceleration threshold to detect a flip

function checkFlip() {
  var acc = Puck.accel(); // Get the current accelerometer data
  if (acc.z < -threshold) { // Detect if the Puck.js is upside down
    flipCount += 1; // Increment the flip counter

    if (flipCount == 3) { // Turn on LED after three flips
      digitalWrite(led, true);
    } else if (flipCount == 4) { // Turn off LED after the fourth flip
      digitalWrite(led, false);
      flipCount = 0; // Reset the flip counter
    }
  }
}

// Set a repeat interval to constantly check for flips
setInterval(checkFlip, 200); // Check every 200 ms
