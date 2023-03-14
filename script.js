// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Constants
const length = 8;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuwyx0123456789!@#$%^&*()[]{}=+<>";
//Generator function
function generatePassword () {
  let pass = "";
  for (var i = 0; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length
    );
  
  pass += chars.substring(rand, rand +1)
  }
  console.log(pass);

  
}




generateBtn.addEventListener("click", writePassword);
