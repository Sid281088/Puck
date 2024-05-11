var  on = false;
setInterval(function() {
  on = !on;
  LED1.write(on);
}, 500);

// The desired time to turn on the LED (in 24-hour format)
var turnOnHour = 18; // 6 PM
var turnOnMinute = 0; // 0 minutes past the hour

// The duration (in milliseconds) to keep the LED on
var duration = 10000; // 10 seconds

// Function to turn on the green LED
function turnOnLED() {
  digitalWrite(LED2, 1); // Turn on the green LED
  console.log("LED is on");

  // Turn off the LED after the specified duration
  setTimeout(() => {
    digitalWrite(LED2, 0); // Turn off the green LED
    console.log("LED is off");
  }, duration);
}

// Function to check the current time
function checkTime() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();

  // Check if the current time matches the target time
  if (currentHour === turnOnHour && currentMinute === turnOnMinute) {
    turnOnLED();
  }
}

// Call checkTime() every minute to see if it's time to turn on the LED
setInterval(checkTime, 60000); // 60,000 ms is 1 minute

// Check the time at startup in case the device is restarted near the trigger time
checkTime();
