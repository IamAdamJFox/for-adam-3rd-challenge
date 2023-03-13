// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}
//Generators
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 17) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 23) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 12) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
