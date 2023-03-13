// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedpassword = '';

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
const length = 8

console.log(getRandomSymbol());
generateBtn.addEventListener("click", writePassword);
