// Assignment Code
var generateBtn = document.querySelector("#generate");
// var confirmBtn = document.querySelector("#confirm");

// Write password to the #password input
function writePassword() {
  var showCriteria = document.getElementById("criteria");
  showCriteria.classList.remove("hide");
  document.getElementById("generate").innerHTML = "Confirm & Generate"

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

