const arrowContainer = document.querySelector(".arrow-container");
for(let i = 0; i < 8; i++) {
    const arrowBtns = document.createElement("button");
    arrowBtns.classList.add(`arrowBtns${i}`);
    arrowContainer.append(arrowBtns);
}
