// Assignment Code
var generateBtn = document.querySelector("#generate");


var passLength = prompt("How long will your password be? It must be between 8 and 128 characetrs.");
var confirmCharacters = confirm("Would you like to include lowercase letters?");
var confirmUppercase = confirm("Would you like to include uppercase letters?");
var numberConfirm = confirm("Would you like to include number?");
var specialConfirm = confirm("Would you like to include special characters?");

function writePassword() {
  var passLength = prompt("How long will your password be? It must be between 8 and 128 characetrs.");
  console.log(passLength);
  var lowerCharacters = prompt("Do you wish to include lowercase letters?");
  console.log(lowerCharacters);
  var upperCharacters = prompt("Do you wish to include uppercase letters?");
  console.log(upperCharacters);
  var numericCharacters = prompt("Do you wish to include numbers?");
  console.log(numericCharacters);
  var specialCharacters = prompt("Do you wish to include special characters?");
  console.log(specialCharacters);


  var password = generatePassword();



  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

generateBtn.addEventListener("click". writePassword);



var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '-', '_', '=', '+', '`', '~', ',', '<', '.', '>', '/', '?', ';', ':', '\\'];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passLength = "";


var password = generatePassword(numericCharacters, specialCharacters, lowerCharacters, upperCharacters, passLength);

function generatePassword(passLength, numericCharacters, specialCharacters, lowerCharacters, upperCharacters, ){
  pass = "";
  
    
  if (lowerCharacters == true) {
    generatePassword(lowerCharacters)
  };
  if (upperCharacters == true) {
    generatePassword(upperCharacters)
  };
  if (numericCharacters == true) {
    generatePassword(numericCharacters)
  };
  if (specialcharacters == true) {
    generatePassword(specialCharacters)
  };
  
  
  console.log(password);
  return password;
  }
  


