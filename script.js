const buttonArray = ["81", "87","69","82","84","89","85","73","79","80","219", "221","220","65","83","68","70","71","72","74","75", "76", "186", "222","13", "90", "88", "67", "86", "66","78",
"77","188", "190", "191","16"];

const buttonImg = ["q","w","e","r","t","y","u","i","o","p","[","]","\\","a","s","d","f","g","h",
"j","k","l",";","'","Enter","z","x","c","v","b","n","m",",",".","/","Shift"];

let startArr = ['81','87','69','82','84','89','221','71','222','66','16','191','190','188','77','78','13','72','220','85','73','79','80','219','70','186','86','67','88','90','74','65','83','68','76','75'];

const arrowArray = ["left", "up", "right", "down"];
const arrowImg = ["\u2190", "\u2191", "\u2192", "\u2193"];

const buttonContainer = document.querySelector(".button-container");
for (let i = 0; i < 36; i++) {
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
  const padSelected = document.querySelector(`div.padKey-${keySelected}`);
  padSelected.classList.add("playing");
  setTimeout(function() {
    padSelected.classList.remove("playing");
    lightSequence(keySelected);
  }, 150);
});

//start up light sequence when app is launched
for(let i = 0; i < startArr.length; i++) {
  const padSelected = document.querySelector(`div.padKey-${startArr[i]}`);
  setDelay(padSelected, i);
}

function setDelay(pad, index) {
  setTimeout(function() {
    pad.classList.add("playing");
    setTimeout(function() {
      pad.classList.remove("playing");
    }, 500);
  }, index * 50);  //multiply by index so that the items does not appear all at once
}

function mkPadArr(keys) {
  let arr = [];
  let startIndex = buttonArray.indexOf(`${keys}`) + 1;
  let endIndex = startIndex + 5;
  for(let i = startIndex; i < endIndex; i++) {
    arr.push(buttonArray[i]);
  }
  return arr;
}


function lightSequence(keys) {
  let arr = mkPadArr(keys)
  const light1 = document.querySelector(`div.padKey-${arr[0]}`);
  const light2 = document.querySelector(`div.padKey-${arr[1]}`);
  const light3 = document.querySelector(`div.padKey-${arr[2]}`);
  const light4 = document.querySelector(`div.padKey-${arr[3]}`);
  const light5 = document.querySelector(`div.padKey-${arr[4]}`);

  light1.classList.add("playing");
  setTimeout(() => {
    clearTimeout(light1);
    light1.classList.remove("playing");
    light2.classList.add("playing");
    setTimeout(() => {
      clearTimeout(light2);
      light2.classList.remove("playing");
      light3.classList.add("playing");
      setTimeout(() => {
        clearTimeout(light3);
        light3.classList.remove("playing");
        light4.classList.add("playing");
        setTimeout(() => {
          clearTimeout(light4);
          light4.classList.remove("playing");
          light5.classList.add("playing");
          setTimeout(() => {
            clearTimeout(light5);
            light5.classList.remove("playing");
          }, 150);
        }, 150);
      }, 150);
    }, 150);
  }, 150);
}