console.log("-------------------------");
console.log("Password Encryptor Method");
console.log("-------------------------");
console.log("");

let passwordText = window.prompt("Enter Your Password");
let passwordEncrypted = "";
let passwordDcrypted = "";

const charactersList = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "¦",
  "|",
  "€",
  "¥",
  "~",
  "|",
  "<",
  ">",
  "⁅",
  "⁆",
  "«",
  "»",
  "®",
  "℗",
  "©",
  "™",
  "×",
  "'",
  "?",
  "\\",
  "/",
];

const generateNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const shuffleArray = () => {
  for (var i = charactersList.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = charactersList[i];
    charactersList[i] = charactersList[j];
    charactersList[j] = temp;
  }
};

const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

for (let xNumber = 0; xNumber < passwordText.length; xNumber++) {
  shuffleArray();
  let num = generateNumber(1, passwordText.length);
  for (let x = 0; x < num; x++) {
    passwordEncrypted += charactersList[x];
  }
  passwordEncrypted += passwordText[xNumber];
}

console.log("Password Encrypted");
console.log("------------------");
console.log(passwordEncrypted);
document.querySelector('.text').textContent = passwordEncrypted;

for (let i = 0; i < passwordEncrypted.length; i++) {
  if (charactersList.includes(passwordEncrypted[i]) == false) {
    passwordDcrypted += passwordEncrypted[i];
  }
}

// console.log("Password Decrypted");
// console.log("------------------");
// console.log(passwordDcrypted);
