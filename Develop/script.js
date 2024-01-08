// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmBtn = document.querySelector("#confirm");

function checkCheckbox() {
  var lowerChk = document.getElementById("lower");
  if (lowerChk.checked) {
    console.log("CHECKED");
  } else {
    console.log("NOT CHECKED");
  }
}

var upperChk = document.getElementById("upper");
var numericChk = document.getElementById("numeric");
var specialChk = document.getElementById("special");

var characterList = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", '"', '/', ']'],
};

// Write password to the #password input
function criteria() {
  var showCriteria = document.getElementById("criteria");
  showCriteria.classList.remove("hide");
  var hideButton = document.getElementById("generate");
  hideButton.classList.add("hide");
  return
};

function writePassword() {
    checkCheckbox();
}






//   var password = generatePassword();

//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

//   password.value = "test"

// }


// Add event listener to generate button
generateBtn.addEventListener("click", criteria);
confirmBtn.addEventListener("click",writePassword);


