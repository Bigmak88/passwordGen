// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

passwordText.value = password;

//Create Object for Password Criteria
//var password = generatePassword(length, getRandomLower, getRandomUpper, getRandomSymbol, getRandomNumber)  

// Write password to the #password input
function writePassword() {
  const length = prompt("Choose a length of at least 8 characters and no more than 128 characters");

  if (length <= 128) {
    const upper = confirm("Do you want Uppercase included?");

    if (getRandomUpper == true) {
      const lower = confirm("Do you want Lowercase included?")

      if (getRandomLower == true) {
        const symbols = confirm("Do you want Special characters included?");

        if (getRandomSymbol == true) {
          const numbers = confirm("Do you want Numbers included?");

          if(getRandomNumber == true) {
            return '';
          }
        
        }
      }
    }
  }
  }

// Generates a RandomLower
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
  }

// Generates a RandomUpper
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
  }

// Generates a Number
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
  }

// Generates a Symbol
  function getRandomSymbol() {
    const symbols = `!@#$%^&*(){}=<>[]/,.`;
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

// Generates Event Listener
generateBtn.addEventListener("click", writePassword);


