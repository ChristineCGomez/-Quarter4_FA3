function askForNumber() {
  let number;
  let input = prompt("Enter a number:");

  while (isNaN(input) || input === "") {
    input = prompt("That's not a number. Try again:");
  }

  number = parseInt(input);
  let output = "Number inputted: " + number + "\n\n";

  if (number % 2 !== 0) {
    // Rectangle
    for (let i = number; i >= 1; i--) {
      for (let j = 0; j < number; j++) {
        output += i + " ";
      }
      output += "\n";
    }
  } else {
    // Triangle
    for (let i = number; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        output += i + " ";
      }
      output += "\n";
    }
  }

  document.getElementById("output").textContent = output;
}
