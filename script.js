// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const length = 8;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuwyx0123456789!@#$%^&*()[]{}=+<>";

function generatePassword () {
  let pass = "";
  let chars = "";
  for (var i = 0; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length
    );
  
  pass += chars.substring(rand, rand +1)

}

}


generateBtn.addEventListener("click", generatePassword);
