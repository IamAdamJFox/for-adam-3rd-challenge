// Password Generation
const lowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseSet = lowerCaseSet.toUpperCase();
const numberSet = '0123456789';
const specialSet = '?!@#$%&*';

// Function to verify if the input is a valid number between 8 and 128
function isValidPasswordLength(str) {
  const numValue = +str; // Convert to a number using the unary plus operator
  return Number.isInteger(numValue) && numValue >= 8 && numValue <= 128;
}

// Function to get a random character from a given string
function getRandomCharacter(str) {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}

// Function to generate the password
function generatePassword() {
  console.log("Button Clicked"); // For dev visual

  // Inform user of the process
  alert("A new password will be generated based on your answers to the following questions.");

  let password = "";
  let passwordLength;

  // Ask for a valid password length
  do {
    passwordLength = prompt("Please enter a number value between 8 and 128 for the length of your password.");
  } while (!isValidPasswordLength(passwordLength));

  // Convert password length to an integer
  const intPasswordLength = +passwordLength;

  // Confirmation of desired character types
  const upperCase = confirm("Click 'OK' to include uppercase letters.");
  const lowerCase = confirm("Click 'OK' to include lowercase letters.");
  const numbers = confirm("Click 'OK' to include numbers.");
  const specialChars = confirm("Click 'OK' to include special characters.");

  // Create a set of characters based on user choices
  let passSet = "";
  if (upperCase) passSet += upperCaseSet;
  if (lowerCase) passSet += lowerCaseSet;
  if (numbers) passSet += numberSet;
  if (specialChars) passSet += specialSet;

  // Check if at least one character type is selected
  if (passSet === "") {
    alert("You must select at least one character type (uppercase, lowercase, numbers, or special characters). Please try again.");
    return "";
  }

  // Add at least one character of each selected type
  password += getRandomCharacter(upperCaseSet);
  password += getRandomCharacter(lowerCaseSet);
  password += getRandomCharacter(numberSet);
  password += getRandomCharacter(specialSet);

  // Generate the remaining password characters randomly from the passSet
  while (password.length < intPasswordLength) {
    password += getRandomCharacter(passSet);
  }

  return password;
}

// Event listener for the generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
});






