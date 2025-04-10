const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Create the "Let's go for the second game" button
const secondGameBtn = document.createElement("button");
secondGameBtn.textContent = "Let's go for the second game";
secondGameBtn.style.display = "none"; // Initially hidden
secondGameBtn.style.marginTop = "20px";
secondGameBtn.style.padding = "10px 20px";
secondGameBtn.style.fontSize = "1rem";
secondGameBtn.style.borderRadius = "5px";
secondGameBtn.style.backgroundColor = "#8368c3";
secondGameBtn.style.color = "#fff";
secondGameBtn.style.border = "none";
secondGameBtn.style.cursor = "pointer";
secondGameBtn.addEventListener("click", () => {
  window.location.href = "../game2"; // Redirect to the game2 folder
});
resultContainer.appendChild(secondGameBtn);

// Change the position of the "No" button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// "Yes" button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();

    // Show the "Let's go for the second game" button after 5 seconds
    setTimeout(() => {
      secondGameBtn.style.display = "block";
    }, 5000);
  }, 3000);
});