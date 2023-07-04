// Assignment code here

const passwordGenerator = document.getElementById("Password");
const minNumOfChars = 8;
const maxNumOfChars = 128;

const specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



function validatePasswordLength(userChoice) {
  console.log(userChoice)
   var minNumOfChars = 8;
  var maxNumOfChars = 128;
  if(userChoice < minNumOfChars) {
    alert("Must be at least 8 characters long.");
    return false
  }
  if(userChoice > maxNumOfChars){
    alert("Cannot be longer than 128 characters.");
    return false
  } 
  if(isNaN(userChoice)){
    alert("Needs to be a number")
    return false
  }
}
// I need to add an else statement so that anything that isn't a number isnt console logged.
// var characters = function() {


// function createPassword() {
//   let password ="";
//   password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//   password += numeric[Math.floor(Math.random() * numeric.length)];
//   password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
//   password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
// }


// function confirmationCharacters() {
//   debugger
//   var returnival = confirm("Click 'OK' to confirm including special characters");
//   if(returnival == true ) {
//     document.write ("Include special characters");
//     return true;
//   } else {
//     document.write ("Don't include special characters");
//     return false;
//   }
// }

// var wantSpecialCharacters = function() {
//   var special = window.alert("Click 'OK' to confirm including special characters");

//   if (!special)
// }

// var specialCharacters = window.alert("Click 'OK' to confirm including special characters");


// if (!userChoice) {
  // return;
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let password =""; 
//   password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//   password += numeric[Math.floor(Math.random() * numeric.length)];
//   password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
//   password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
var userChoice = window.prompt("How many characters would you like your password to contain?");
console.log(userChoice); 
if (validatePasswordLength(userChoice)=== false) {
  return "Please try again"
}

const answer = confirm("Click 'OK' to confirm including special characters"); 
  if (answer) {
    console.log("User wants special characters");
    var allSpecialCharacters= specialCharacters.join("")
    password += allSpecialCharacters
  }


const isNumericAnswer = confirm("Click 'OK' to confirm including numeric characters"); 
  if (isNumericAnswer) {
    console.log("User wants numeric characters");
    var allNumeric = numeric.join("")
    password += allNumeric
  }


const isLowerCaseAnswer = confirm("Click 'OK' to confirm including lowercase characters"); 
  if (isLowerCaseAnswer) {
    console.log("User wants lowercase characters");
    var allLowerCase = lowerCaseLetters.join("")
    password += allLowerCase
  }


const isUpperCaseAnswer = confirm("Click 'OK' to confirm including uppercase characters"); 
  if (isUpperCaseAnswer) {
    console.log("User wants uppercase characters");
    var allUpperCase = upperCaseLetters.join("")
    password += allUpperCase
  }
  console.log(password)
  let text= ""
  for (let i = 0; i < parseInt(userChoice); i++) {
    text += password.charAt(Math.floor(Math.random() * password.length));
  }
  console.log(text)
  return text;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// function writePassword() {
  
// }
