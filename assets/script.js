// Mal notes - 

// - Global Variables section
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lower);
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upper);
var numb = "1234567890".split("");
console.log(numb);
var specChar = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\u005B", "\u005C", "\u005D", "^", "_", "`", "{", "|", "}", "~",];
console.log(specChar);
var possibleChars = []
var passwordArray = []
//

// GIVEN NOTE - Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN NOTE - Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// GIVEN NOTE - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// building the prompts
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
  //return generatePassword(); --> this is causing an error still
}
if (userLower) {
  possibleChars.concat(lower)
}
if (userUpper) {
  possibleChars.concat(upper)
}
if (userNumber) {
  possibleChars.concat(numb)
}
if (userSpecChar) {
  possibleChars.concat(specChar)
}

passwordArray.push(possibleChars)
return passwordArray.join()
