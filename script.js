const arrowContainer = document.querySelector(".arrow-container");
for(let i = 0; i < 8; i++) {
    const arrowBtns = document.createElement("button");
    arrowBtns.classList.add("arrow", `arrowBtns${i}`);
    arrowBtns.textContent = i;
    arrowContainer.append(arrowBtns);
}
