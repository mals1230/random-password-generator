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
var userPassword = ""

//created function to generate click
function generatePassword() {
  var length = prompt("How many characters do you want your password to be? \nMust be between 8 and 128");
  function validateUserInput (l) {
    console.log(validateUserInput)
    if (l < 8 || l > 128) { 
      return false
    } else {
      return true
    }
  }
  validateUserInput(length);
  console.log(validateUserInput(length))
    if (validateUserInput(length)) {
      console.log ('Input is valid')
    } else {
      return
    }
// created the prompts
  var userLower = confirm("Would you like to include lowercase letters?")
  var userUpper = confirm("Would you like to include UPPERCASE letters?")
  var userNumber = confirm("Would you like to include numbers?")
  var userSpecChar = confirm("Would you like to include special characters?")
  // alert to display if they don't choose any of the options
  if (!userLower && !userUpper && !userNumber && !userSpecChar) {
    alert("You need to select at least one type of character")
  }
  
  if (userLower) {
    possibleChars = possibleChars.concat(lower)
    console.log(userLower)
  }
  
  if (userUpper) {
    possibleChars = possibleChars.concat(upper)
    console.log(userUpper)
  }
  
  if (userNumber) {
    possibleChars = possibleChars.concat(numb)
    console.log(userNumber)
  }
  
  if (userSpecChar) {
    possibleChars = possibleChars.concat(specChar)
    console.log(userSpecChar)
  }

  for (let i = 0; i < length; i++) {
    var randomInt = Math.floor(Math.random() * possibleChars.length)
    userPassword += possibleChars[randomInt] ;
    console.log(randomInt)
  }
  console.log(possibleChars)

  return userPassword
}

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
console.log(click);
