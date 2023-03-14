// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

const length = 8;
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuwyx0123456789!@#$%^&*()[]{}=+<>";

function generatePassword () {
  let pass = ""
  for (var i = o; i <= length; i++) {
    
  }
}



//console.log(getRandomSymbol);
generateBtn.addEventListener("click", writePassword);
