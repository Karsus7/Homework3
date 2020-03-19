// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  return Math.random();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var confirmCharacters = confirm("Would you like to include lowercase letters?");
// var uppercasePrompt = prompt("Would you like to include lowercase letters?");
var confirmUppercase = confirm("Would you like to include uppercase letters?");
// var Uppercaseprompt = prompt("Would you like to include uppercase letters?");

//global variables meaning at the very top of our code

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

// Array of special characters to be included in password

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '-', '_', '=', '+', '`', '~', ',', '<', '.', '>', '/', '?', ';', ':', '\']; 

// Array of lowercase characters to be included in password

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password

var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];