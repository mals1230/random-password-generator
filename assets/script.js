// Assignment code here

// Global Variables
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lower);
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upper);
var numb = "1234567890".split("");
console.log(numb);
var specChar = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\u005B", "\u005C", "\u005D", "^", "_", "`", "{", "|", "}", "~",];
console.log(specChar);
var allChar = [lower + upper + numb + specChar];
console.log(allChar);

  
var length = prompt("How many characters do you want your password to be? \nMust be between 8 and 128");
  if (!length)
    alert("You need to select a number")

    //have to add a refresh/loop here so that they choose yes
    
    // then these prompts can run:

    var userLower = confirm("Would you like to include lowercase letters?");
    var userUpper = confirm("Would you like to include UPPERCASE letters?")
    var userNumb = confirm("Would you like to include numbers?")
    var userSpecChar = confirm("Would you like to include special characters?")

If (!userLower && !userUpper && !userNumb && !userSpecChar) 
  alert("You need to select one of the options")
 


var options = ["lower", "upper", "numb", "specChar"];

// GIVEN NOTES: Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// GIVEN NOTES: Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// GIVEN NOTES: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);