// Assignment Code
// Button variables
var generateBtn = document.querySelector("#generate");
var confirmBtn = document.querySelector("#confirm");

// Checkbox variables
var lowerChk = document.getElementById("lower");
var upperChk = document.getElementById("upper");
var numericChk = document.getElementById("numeric");
var specialChk = document.getElementById("special");

// Object for all possible characters
var characterList = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", '"', '/', ']'],
};

// Array for usable characters in final password and array for final password characters
var useableCharacters = [];
var passwordArray = [];

// Fuction to avoid DRY with checkboxes
function checkCheckbox(x, y) {
  if (x.checked) {
    var random1 = (Math.floor(Math.random() * y.length));
    passwordArray.push(y[random1]);
    useableCharacters.push(...y);
  }
}

// Function to show password criteria options after initial button click
function criteria() {
  var showCriteria = document.getElementById("criteria");
  showCriteria.classList.remove("hide");
  var hideButton = document.getElementById("generate");
  hideButton.classList.add("hide");
  return
};

// Function to write password. Refer to algorithm definition in readme
function writePassword() {
  // Validation check
  var lengthTxt = document.getElementById("pwLength").value;
  if (lengthTxt < 8 || lengthTxt > 128) {
    alert("Please enter a numeric value between 8 and 128!")
    return 
  } else if (isNaN(lengthTxt)) {
    alert("Please enter a numeric value between 8 and 128!")
    return
  } else if (!lowerChk.checked && !upperChk.checked && !numericChk.checked && !specialChk.checked) {
    alert("Please check at least one criteria box!");
    return
  } else {
  }

  // Algorithm part 1
  useableCharacters.length = 0;
  passwordArray.length = 0;
  checkCheckbox(lowerChk, characterList.lower);
  checkCheckbox(upperChk, characterList.upper);
  checkCheckbox(numericChk, characterList.numeric);
  checkCheckbox(specialChk, characterList.special);

  // Algorithm part 2
  var modUserLength = (lengthTxt - passwordArray.length);

  // Algorithm part 3
  for (var i = 0; i < modUserLength; i++) {
    var random2 = Math.floor(Math.random() * useableCharacters.length);
    var randomCharacter = useableCharacters[random2];
    // Randomize placement of newly inserted characters
    var random3 = Math.floor(Math.random() * modUserLength);
    passwordArray.splice(random3, 0, randomCharacter);
    // Output to text field
    var password = (passwordArray.join(""));
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", criteria);
confirmBtn.addEventListener("click", writePassword);