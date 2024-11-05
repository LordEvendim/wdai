const minLenInput = document.getElementById("min-len");
const maxLenInput = document.getElementById("max-len");
const shouldIncludeCapitalInput = document.getElementById("should-capital");
const shouldIncludeSpecialInput = document.getElementById("should-special");
const generateButton = document.getElementById("generate");

const charset = "abcdefghijklmnopqrstuvwxyz";
const charsetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsetSpecial = "-!=+[]{};:@#$%^&*()_";

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
  let finalCharset = charset;
  let password = "";
  let minLength = parseInt(minLenInput.value);
  let maxLength = parseInt(maxLenInput.value);

  if (isNaN(minLength) || isNaN(maxLength)) {
    alert("0 v 0");
    return;
  }

  if (shouldIncludeSpecialInput.checked) {
    finalCharset += charsetSpecial;
  }

  if (shouldIncludeCapitalInput.checked) {
    finalCharset += charsetCapital;
  }

  const passLength = getRandomInRange(minLength, maxLength);

  for (let i = 0; i < passLength; i++) {
    password += finalCharset[getRandomInRange(0, finalCharset.length - 1)];
  }

  alert(password);
};

generateButton.onclick = generate;
