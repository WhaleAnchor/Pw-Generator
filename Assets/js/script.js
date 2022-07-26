var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Variables and list for all of the characters
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var speccharArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Empty Array for the final array for password and user array for input.
var resultArray = [];
var userArray = [];

uppercaseArray [1]
//-----------------------------------------------------------------
  enter = numCharacter = prompt("Choose a number from 8-128.");
    // If you do not enter anything or click out.
    if (!enter) {
      alert("Please enter a number from 8 to 128.");
      return;
    // If you enter a number under 8 or above 128.
    } else if (enter < 8 || enter > 128) {
      alert("Please enter a number from 8 to 128.");
      return;
    // Four categories confirmation with confirm prompt commands
    } else { 
    var numbers = confirm ("Do you want your password to contain Numbers?");
    var uppercase = confirm ("Do you want your password to contain Uppercase Letters?");
    var lowercase = confirm ("Do you want your password to contain Lowercase Letters?");
    var specchar = confirm ("Do you want your password to contain Special Characters?");
    // If you click NO on all four categories
    if (!numbers && !uppercase && !lowercase && !specchar) {
      alert("You need to choose at least one category.");
      return;
      }}

// All category condition arrays are below and will concatenate it into resultArray if the variables return true.

if (numbers){
  resultArray = resultArray.concat(numArray);
}

if (uppercase){
  resultArray = resultArray.concat(uppercaseArray);
}

if (lowercase){
  resultArray = resultArray.concat(lowercaseArray);
}

if (specchar){
  resultArray = resultArray.concat(speccharArray);
}
console.log(resultArray)

// Here, it takes the categories chosen to create a random selection of characters from those categories.
for (var i = 0; i < numCharacter; i++) {
      
  userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);