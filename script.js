const buttonArray = 
  ["81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219", "221", "220", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "13", "90", "88", "67", "86", "66","78", "77", "188", "190", "191", "16"];

const buttonImg = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"];

const arrowArray = ["left", "up", "right", "down"];
const arrowImg = ["\u2190", "\u2191", "\u2192", "\u2193"];

const arrowContainer = document.querySelector(".arrow-container");
for (let i = 0; i < 4; i++) {
  const arrowBtns = document.createElement("button");
  arrowBtns.classList.add("arrow", `arrowBtns-${arrowArray[i]}`);
  arrowBtns.textContent = arrowImg[i];
  arrowContainer.append(arrowBtns);
}

// const buttonContainer = document.querySelector(".button-container");
// for (let row = 0; row < 6; row++) {
//   for (let column = 0; column < 6; column++) {
//     const launchButton = document.createElement("button");
//     launchButton.classList.add("padKey", `padKey-${buttonArray[row][column]}`);
//     launchButton.textContent = buttonImg[row][column];
//     buttonContainer.append(launchButton);
//   }
// }

const buttonContainer = document.querySelector(".button-container");
for(let i = 0; i < 36; i++) {
  const launchButton = document.createElement("div");
  launchButton.classList.add("padKey", `padKey-${buttonArray[i]}`);
  launchButton.textContent = buttonImg[i];
  buttonContainer.append(launchButton);
}

window.addEventListener("keydown", (e) => {
    let keySelected = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keySelected}"]`);
    audio.currentTime = 0;
    audio.play();
    console.log(e.keyCode);
    const padSelected = document.querySelector(`div.padKey-${keySelected}`);
    padSelected.classList.add('playing');
    
    setTimeout(function() {
        padSelected.classList.remove("playing");
    }, 100);
})

