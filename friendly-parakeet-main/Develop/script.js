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

