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

// Array for usable charcerts in final password and array for final password characters
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

// Function to show password criteria options
function criteria() {
  var showCriteria = document.getElementById("criteria");
  showCriteria.classList.remove("hide");
  var hideButton = document.getElementById("generate");
  hideButton.classList.add("hide");
  return
};

// Function to write password. 
// At a high level, the algorithm works in four parts.
// 1. Pick ONE random character from each CHECKED character type and put in an array (which will be a part of the final PW). This ensures (per the acceptance criteria) that at least one desired character WILL get used in the password.
// 2. Subtract the number of boxes checked from the length of the password the user defined (call this "modUserLength"). This is how many more characters need to be added to the PW array. 
// 3. Put all the checked box objects in an array. Randomly pick the number of "modUserLength" characters from that array and place them in the final PW array. For good security measuere, scramble the content of the PW array into the text box for the user. 
// 4. Run a validation to make sure the PW match the criteria given by the user. 

function writePassword() {
  // Algorithm part 1
  useableCharacters.length = 0;
  passwordArray.length = 0;
  checkCheckbox(lowerChk, characterList.lower);
  checkCheckbox(upperChk, characterList.upper);
  checkCheckbox(numericChk, characterList.numeric);
  checkCheckbox(specialChk, characterList.special);

  // Algorithm part 2
  var lengthTxt = document.getElementById("pwLength").value;
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

  console.log(passwordArray)
  console.log(passwordArray.length);
  // console.log(characterList.lower);
  // validation();

  // Algorithm part 4 
  // function validation() {
  //   for (var i = 0; i < characterList.lower.length; i++);
  //   for (var j = 0; j < passwordArray.length; j++); {
  //     if (passwordArray[j] === characterList.lower[i]); {
  //       var varify = document.getElementById("lowerText");
  //       varify.classList.add("green");{

  //       }
  //     }
  //     return
  //   }
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", criteria);
confirmBtn.addEventListener("click", writePassword);