// js for index
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// letters: 0 -51
// numbers: 52 - 62
// symbols: 63 - 91

let buttonEl = document.getElementById("generator");
let pass1El = document.getElementById("pass1");
let pass2El = document.getElementById("pass2");
let numCharacsEl = document.getElementById("numCharacs");
let copyPass1Btn = document.getElementById("copyPass1");
let copyPass2Btn = document.getElementById("copyPass2");
let incNumbersCB = document.getElementById("includeNumbers");
let incSymbolsCB = document.getElementById("includeSymbols");

buttonEl.addEventListener('click', generatePassClick);

function generatePassClick() {
  let firstPass = '';
  let secondPass = '';
  let numCh = numCharacsEl.value;
  let incNumbs = incNumbersCB.checked;
  let incSymbs = incSymbolsCB.checked;

  // console.log("length of chars array: "+ characters.length + " numchars: "+ numCh + " include numbers: " + incNumbs + " include symbols: " + incSymbs);
  if (numCh < 8) {
    numCh = 8;
    numCharacsEl.value = 8;
  } else if (numCh > 16) {
    numCh = 16;
    numCharacsEl.value = 16;
  }

  function generatesPass(maxIndex) {
    for (let i=0; i<numCh; i++) {
      let randomNumb = Math.floor(Math.random() * maxIndex);
      firstPass += characters[randomNumb];
    }
    for (let i=0; i<numCh; i++) {
      let randomNumb = Math.floor(Math.random() * maxIndex);
      secondPass += characters[randomNumb];
    }
  }

  // checks to see if we include numbers and symbols
  let maxIndexCharsArr = 0;
  if (incNumbs && incSymbs) {
    maxIndexCharsArr = characters.length;
    generatesPass(maxIndexCharsArr);
  } else if (incNumbs && !incSymbs) {
    maxIndexCharsArr = 62;
    generatesPass(maxIndexCharsArr);
  } else if (!incNumbs && !incSymbs) {
    maxIndexCharsArr = 52;
    generatesPass(maxIndexCharsArr);
  } else {
    maxIndexCharsArr = 81;
    for (let i=0; i<numCh; i++) {
      let randomNumb = Math.floor(Math.random() * maxIndexCharsArr);
      if (randomNumb <= 62 && randomNumb >= 52) {
        let substituteNumb = randomNumb + 10;
        firstPass += characters[substituteNumb];
      } else {
        firstPass += characters[randomNumb];
      }
    }
    for (let i=0; i<numCh; i++) {
      let randomNumb = Math.floor(Math.random() * maxIndexCharsArr);
      if (randomNumb <= 62 && randomNumb >= 52) {
        let substituteNumb = randomNumb + 10;
        secondPass += characters[substituteNumb];
      } else {
        secondPass += characters[randomNumb];
      }
    }
  }


  // console.log(firstPass);

  pass1El.value = firstPass;
  pass2El.value = secondPass;

  // reset text content of copying btns
  copyPass1Btn.textContent = "Copy Password 1";
  copyPass2Btn.textContent = "Copy Password 2";
}

copyPass1Btn.addEventListener('click', copyPass1func);
copyPass2Btn.addEventListener('click', copyPass2func);

function copyPass1func() {
  let actualPass1 = pass1El.value;
  // console.log(actualPass1);
  navigator.clipboard.writeText(actualPass1);
  copyPass1Btn.textContent = 'Copied to clipboard!';
}

function copyPass2func() {
  let actualPass2 = pass2El.value;
  // console.log(actualPass2);
  navigator.clipboard.writeText(actualPass2);
  copyPass2Btn.textContent = 'Copied to clipboard!';
}