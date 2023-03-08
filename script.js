// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //Puts random password into text box if it is not equal to null.
  if (password !== null) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

//Generates a random password using prompts to the user for password criteria.
function generatePassword()
{
  //Arrays used for different criteria options.
  let lowercaseLettersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercaseLettersList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specialCharactersList = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '<', '>', ',', '.', '\'', '"', ';', ':', '/', '?', '|', '\\', '[', ']', '{', '}', ' '];

  let criteria = [];

  
  let passwordLength = 0;
  
  //Makes sure password is length of 1 or longer.
  while (passwordLength < 1) 
  {
    passwordLength = prompt("Enter a password length of 1 or larger.");
  }

  //Confirms user's password criteria and puts them in criteria array.
  let useLC = confirm("Would you like your password to contain lowercase letters?");
  if (useLC === true) {
    criteria.push("lowercase");
  }

  let useUC = confirm("Would you like your password to contain uppercase letters?");
  if (useUC === true) {
    criteria.push("uppercase");
  }

  let useNum = confirm("Would you like your password to contain numbers?");
  if (useNum === true) {
    criteria.push("number");
  }

  let useSC = confirm("Would you like your password to contain special characters?");
  if (useSC === true) {
    criteria.push("specialCharacter");
  }

  //Checks if at least one criteria is met.
  if ((passwordLength >= 1) && (useLC === true || useUC === true || useNum === true || useSC === true))
  {
    let randomCharType;
    let randomChar;
    let randomMin;
    let randomMax;
    let password = "";

    //Creates a password by concatting one character at a time.
    for (let x = 0; x < passwordLength; x++)
    {
        //Picks which type of character will be used for the currentChar 
        randomCharType = criteria[Math.floor(Math.random() * criteria.length)];

        //Checks what character type is contained in randomCharType to get which array will be used for randomChar.
        if (randomCharType === "lowercase") {
          randomChar = lowercaseLettersList[Math.floor(Math.random() * lowercaseLettersList.length)];
        }

        else if (randomCharType === "uppercase") {
          randomChar = uppercaseLettersList[Math.floor(Math.random() * uppercaseLettersList.length)];
        }

        else if (randomCharType === "number") {
          randomChar = numbersList[Math.floor(Math.random() * numbersList.length)];
        }

        else {
          randomChar = specialCharactersList[Math.floor(Math.random() * specialCharactersList.length)];
        }

        password = password + randomChar;
    }

    return password;
  }

  //If no criteria are met it alerts the user and returns null. 
  else
  {
    alert("Your password must accept at least 1 criteria.");
    return null;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
