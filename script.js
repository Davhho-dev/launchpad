const keyArray = 
                [
                    ["q", "w", "e", "r", "t", "y"],
                    ["u", "i", "o", "p", "close-br", "open-br"],
                    ["bslash", "a", "s,", "d", "f", "g"],
                    ["h", "j", "k", "l", "semicolon", "quote"],
                    ["enter", "z", "x", "c", "v", "b"],
                    ["n", "m", "comma", "period", "fslash", "shift"]
                ];

const arrowContainer = document.querySelector(".arrow-container");
for(let i = 0; i < 4; i++) {
    const arrowBtns = document.createElement("button");
    arrowBtns.classList.add("arrow", `arrowBtns${i}`);
    arrowBtns.textContent = i;
    arrowContainer.append(arrowBtns);
}

const buttonContainer = document.querySelector(".button-container");
for(let row = 0; row < 6; row++) {
    for(let column = 0; column < 6; column++) {
        const launchButton = document.createElement("button");
        launchButton.classList.add("padKey", `padKey-${keyArray[row][column]}`);
        buttonContainer.append(launchButton);
    }
}

// window.addEventListener("keydown", function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     console.log(audio);
//     audio.currentTime = 0;
//     audio.play();
// })


