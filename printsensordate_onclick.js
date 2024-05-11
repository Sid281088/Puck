var intervalId = null; // Variable to store the interval ID
var printing = false; // Flag to track if we're printing data
var lastPressTime = 0; // Timestamp of the last button press

function toggleSensor() {
  var now = getTime(); // Get the current time

  // If the button is pressed twice within 1 second
  if (now - lastPressTime < 1) {
    printing = !printing; // Toggle the flag

    if (printing) {
      // Start printing magnetometer readings every second
      intervalId = setInterval(printSensorData, 1000);
    } else {
      // Stop printing and clear the interval
      clearInterval(intervalId);
    }
  }

  lastPressTime = now; // Update the last press time
}

function printSensorData() {
    T=E.getTemperature();
    console.log(Date(),";",T);
  }


// Set up a watch on the button to detect double presses
setWatch(toggleSensor, BTN, { repeat: true, edge: "rising", debounce: 50 });
