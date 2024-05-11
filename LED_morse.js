var redLED = LED1; // Red LED on Puck.js

// Morse code dictionary for A-Z, 0-9, and space
var morseCode = {
  'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..',  'E': '.',
  'F': '..-.', 'G': '--.',  'H': '....', 'I': '..',   'J': '.---',
  'K': '-.-',  'L': '.-..', 'M': '--',   'N': '-.',   'O': '---',
  'P': '.--.', 'Q': '--.-', 'R': '.-.',  'S': '...',  'T': '-',
  'U': '..-',  'V': '...-', 'W': '.--',  'X': '-..-', 'Y': '-.--',
  'Z': '--..', '0': '-----','1': '.----','2': '..---','3': '...--',
  '4': '....-', '5': '.....','6': '-....','7': '--...','8': '---..',
  '9': '----.', ' ': ' ' // Morse for space (a longer pause)
};

// Duration definitions (in milliseconds)
var dotDuration = 200; // Duration of a dot
var dashDuration = 600; // Duration of a dash (three times a dot)
var letterPause = 600; // Pause between letters
var wordPause = 1400; // Pause between words

// Blink the LED for a specified duration
function blink(duration) {
  digitalWrite(redLED, 1); // Turn the LED on
  setTimeout(() => {
    digitalWrite(redLED, 0); // Turn the LED off
  }, duration);
}

// Send a Morse code pattern
function sendMorse(pattern) {
  for (var i = 0; i < pattern.length; i++) {
    var symbol = pattern[i];
    var duration = symbol === '.' ? dotDuration : dashDuration;
    blink(duration); // Blink for dot or dash duration

    // Pause after each symbol
    var pause = i < pattern.length - 1 ? dotDuration : letterPause;
    setTimeout(() => {}, pause);
  }
}

// Send a message in Morse code
function sendMessage(message) {
  message = message.toUpperCase(); // Convert to uppercase
  var delay = 0; // To set timeout delays properly

  for (var i = 0; i < message.length; i++) {
    var char = message[i];
    if (morseCode[char]) {
      var morsePattern = morseCode[char];
      setTimeout(() => sendMorse(morsePattern), delay);

      // Adjust delay for the next character
      delay += morsePattern.length * dotDuration + letterPause;
    } else {
      delay += wordPause; // Longer pause for spaces
    }
  }
}

// Send a specific message
sendMessage("this is an actual test");
