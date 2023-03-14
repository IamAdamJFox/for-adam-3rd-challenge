// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");
//CONSTANTS
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
 
  const passwordLength = prompt("How long would you like your password?");

  var askLowerCase = confirm("Do you want lowercase characters?");
  var askUpperCase = confirm("Do you want uppercase characters?");
  var askNumber = confirm("Do you want numeric characters?");
  var askSymbol = confirm("Do you want symbol characters?");

//Generators
  if (askLowerCase) {
    const randomIndex = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase[randomIndex];
  }
  if (askUpperCase) {
    const randomIndex = Math.floor(Math.random() * upperCase.length);
    password += upperCase[randomIndex];
  }
  if (askNumber) {
    const randomIndex = Math.floor(Math.random() * number.length);
    password += number[randomIndex];
  }
  if (askSymbol) {
    const randomIndex = Math.floor(Math.random() * symbol.length);
    password += symbol[randomIndex];
  }
 
 //Checks
  for (let i = 0; i < passwordLength; i++) {
    if (askLowerCase) {
      const randomIndex = Math.floor(Math.random() * lowerCase.length);
      password += lowerCase[randomIndex];
    }
    if (askUpperCase) {
      const randomIndex = Math.floor(Math.random() * upperCase.length);
      password += upperCase[randomIndex];
    }
    if (askNumber) {
      const randomIndex = Math.floor(Math.random() * number.length);
      password += number[randomIndex];
    }
    if (askSymbol) {
      const randomIndex = Math.floor(Math.random() * symbol.length);
      password += symbol[randomIndex];
    }
  }
  console.log (password)
  return password.substring(0, passwordLength);

}

//Mario Inzunza was very helpful








