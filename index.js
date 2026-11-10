// js for index
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("generator");
let pass1El = document.getElementById("pass1");
let pass2El = document.getElementById("pass2");
let numCharacsEl = document.getElementById("numCharacs");

buttonEl.addEventListener('click', generatePass);

function generatePass() {
  let firstPass = '';
  let secondPass = '';
  let numCh = numCharacsEl.value;
  // console.log("numchars:"+ numCh);
  if (numCh < 8) {
    numCh = 8;
    numCharacsEl.value = 8;
  } else if (numCh > 16) {
    numCh = 16;
    numCharacsEl.value = 16;
  }
  for (let i=0; i<numCh; i++) {
    let randomNumb = Math.floor(Math.random() * characters.length);
    firstPass += characters[randomNumb];
  }
  for (let i=0; i<numCh; i++) {
    let randomNumb = Math.floor(Math.random() * characters.length);
    secondPass += characters[randomNumb];
  }

  // console.log(firstPass);

  pass1El.value = firstPass;
  pass2El.value = secondPass;
}