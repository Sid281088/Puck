function printMagData() {
  var magn = Puck.mag(); // Get the current magnetometerometer data
  console.log("mag readings: ", magn); // Print the data
}

// Set an interval to print data every 0.5 seconds (500 ms)
setInterval(printMagData, 500);
