// Mal notes - 


// push() the randomly generated character to a empty array called passwordArray

// return.passwordArray.join()  join takes an array and joins it down into a string


// - Global Variables
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lower);
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upper);
var numb = "1234567890".split("");
console.log(numb);
var specChar = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\u005B", "\u005C", "\u005D", "^", "_", "`", "{", "|", "}", "~",];
console.log(specChar);
var passibleChars = []
var passwordArray = []

//

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var length = prompt("How many characters do you want your password to be? \nMust be between 8 and 128");
function validateUserInput (length) {
  if (length < 8 || length > 128) { 
    return null
  }
}
var userLower = confirm("Would you like to include lowercase letters?");
var userUpper = confirm("Would you like to include UPPERCASE letters?")
var userNumber = confirm("Would you like to include numbers?")
var userSpecChar = confirm("Would you like to include special characters?")

if (!userLower && !userUpper && !userNumber && !userSpecChar) {
  alert("You need to select at least one type of character");
  return generatePassword();
}

if (userLower) {
  possibleChars.concat(specialCharsArray)
}

if (userUpper) {
  possibleChars.concat(SpecialNumbsArray)
}

if (userNumber) {
  possibleChars.concat(SpecialNumbsArray)
}

if (userSpecChar) {
  possibleChars.concat(SpecialNumbsArray)
}



// GIVEN NOTES: Write password to the #password input




generateBtn.addEventListener("click", writePassword);


// GIVEN NOTES: Assignment code here
var generateBtn = document.querySelector("#generate");
// GIVEN NOTES: Add event listener to generate button
generateBtn.addEventListener("click", function())