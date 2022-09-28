const arrowContainer = document.querySelector(".arrow-container");
for(let i = 0; i < 8; i++) {
    const arrowBtns = document.createElement("button");
    arrowBtns.classList.add("arrow", `arrowBtns${i}`);
    arrowBtns.textContent = i;
    arrowContainer.append(arrowBtns);
}

const buttonContainer = document.querySelector(".button-container");
for(let row = 0; row < 8; row++) {
    for(let column = 0; column < 8; column++) {
        const launchButton = document.createElement("button");
        launchButton.classList.add("launch-button", `launchBtns-row${row}-column${column}`);
        buttonContainer.append(launchButton);
    }
}