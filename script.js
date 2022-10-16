// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// New Code from here:
function generatePassword() {
  var uppercaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];

  var resultArray = [];
  var userArray = [];

  var numCharacter = prompt(
    "How many literals do you want to include (between 8 and 128)?"
  );
  var numbers = confirm("numbers to be included?");
  var uppercases = confirm("uppercases to be included?");
  var lowercases = confirm("lowercases to be included?");
  var characters = confirm("special characters to be included?");

  if (numbers) {
    resultArray = resultArray.concat(numbArray);
  }

  if (uppercases) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  if (lowercases) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  if (characters) {
    resultArray = resultArray.concat(characterArray);
  }
  console.log(resultArray);

  for (var i = 0; i < numCharacter; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");
}
