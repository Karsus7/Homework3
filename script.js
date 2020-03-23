var generateBtn = document.querySelector("#generate");


var passLength = prompt("How long will your password be? It must be between 8 and 128 characters.");
var confirmCharacters = confirm("Would you like to include lowercase letters?");
var confirmUppercase = confirm("Would you like to include uppercase letters?");
var numberConfirm = confirm("Would you like to include number?");
var specialConfirm = confirm("Would you like to include special characters?");

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '-', '_', '=', '+', '`', '~', ',', '<', '.', '>', '/', '?', ';', ':', '\\'];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passLength = [];

function writePassword() {

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

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}





// var password = generatePassword(numericCharacters, specialCharacters, lowerCharacters, upperCharacters, passLength);

// function generatePassword(passLength, numericCharacters, specialCharacters, lowerCharacters, upperCharacters, ) {
//   pass = "";



    function randomItem(arr)
    {
    var index = Math.floor(Math.random()*arr.length);
    var element = arr[index];
    return element;
    }


    var password = "";
    for (var index = 0; index < (passLength); index++){;

      var password = Math.floor(Math.random() * (128 - 8)) + 8;
      password.push(randomItem(numericCharacters, specialCharacters, lowerCharacters, upperCharacters));
      console.log(password)
    }
    return password {
    generateBtn.addEventListener("click".writePassword);
    }

