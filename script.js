// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 17) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 23) + 65);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 12) + 65);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
