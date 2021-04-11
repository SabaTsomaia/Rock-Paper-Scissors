// User Navigation
const rulesBtn = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const close = document.getElementById("img");
const main = document.querySelector("main");

// ActualGamePlay DOM
const center = document.querySelector(".center-main");
const resultContainer = document.querySelector(".result-container");
const firstPlayer = document.querySelector(".first-player");
const secondPlayer = document.querySelector(".second-player");
const wlText = document.querySelector("h1");
const userScore = document.querySelector(".span");
const playAgain = document.querySelector(".play-again");
const h3 = document.querySelector("h3");

rulesBtn.addEventListener("click", (e) => {
  rules.classList.remove("hidden");
  overlay.style.display = "block";
});

const arrClose = [overlay, close];
arrClose.forEach((e) => {
  e.addEventListener("click", () => {
    rules.classList.add("hidden");
    overlay.style.display = "none";
  });
});

const markupRandom = [
  `
    <img class="circle circle-1 img-1" src="./images/icon-paper.svg" alt="paper" style="position: static;"/>
    `,
  `
    <img class="circle circle-2 img-2" src="./images/icon-spock.svg" alt="spock" style="position: static;"/>
    `,
  `
    <img class="circle circle-3 img-3" src="./images/icon-rock.svg" alt="rock" style="position: static;"/>
    `,
];
let score = 0;
const choosingWinner = function () {
  if (
    firstPlayer.lastElementChild.classList.contains("img-1") &&
    secondPlayer.lastElementChild.classList.contains("img-2")
  ) {
    wlText.innerHTML = "You lose!";
    body.style.backgroundColor = "red";
    body.style.backgroundImage =
    "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(0, 93%, 44%) )";
  } else if (
    firstPlayer.lastElementChild.classList.contains("img-2") &&
    secondPlayer.lastElementChild.classList.contains("img-1")
  ) {
    wlText.innerHTML = "you Win!";
    score++;
    userScore.innerHTML = score;
    body.style.backgroundColor = 
    "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(89, 100%, 50%) )";
  } else if (
    firstPlayer.lastElementChild.classList.contains("img-1") &&
    secondPlayer.lastElementChild.classList.contains("img-3")
  ) {
    wlText.innerHTML = "You lose!";
    body.style.backgroundColor = "red";
    body.style.backgroundImage =
    "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(0, 93%, 44%) )";
  } else if (
    firstPlayer.lastElementChild.classList.contains("img-3") &&
    secondPlayer.lastElementChild.classList.contains("img-1")
  ) {
    wlText.innerHTML = "You Win!";
    score++;
    userScore.innerHTML = score;
    body.style.backgroundImage =
    "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(89, 100%, 50%)";
  } else if (
    firstPlayer.lastElementChild.classList.contains("img-2") &&
    secondPlayer.lastElementChild.classList.contains("img-3")
  ) {
    wlText.innerHTML = "You lose!";
    body.style.backgroundColor = "red";
    body.style.backgroundImage =
      "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(0, 93%, 44%) )";
  } else if (
    firstPlayer.lastElementChild.classList.contains("img-2") &&
    secondPlayer.lastElementChild.classList.contains("img-3")
  ) {
    wlText.innerHTML = "You Win";
    score++;
    userScore.innerHTML = score;
    body.style.backgroundImage =
      "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(89, 100%, 50%) )";
  } else {
    wlText.innerHTML = "TIE!!";
    body.style.backgroundImage =
      "linear-gradient(to bottom, hsl(237, 49%, 15%), hsl(16, 13%, 99%) )";
  }
};

const afterChoosed = function () {
  // When Clicking to the image

  center.addEventListener("click", function (e) {
    let random = Math.floor(Math.random() * 3);

    secondPlayer.insertAdjacentHTML("beforeend", markupRandom[random]);
    secondPlayer.insertAdjacentElement("afterbegin", h3);

    let target = e.target.closest(".circle");
    if (target === null) return;

    main.style.display = "none";
    resultContainer.style.display = "flex";
    target.style.position = "static";

    firstPlayer.insertAdjacentElement("beforeend", target);

    playAgain.addEventListener("click", () => {
      main.style.display = "flex";
      resultContainer.style.display = "none";
      target.style.position = "absolute";
      center.insertAdjacentElement("beforeend", target);
      secondPlayer.innerHTML = "";
      body.style.backgroundImage = `linear-gradient(
        to bottom,
        hsl(214, 47%, 23%),
        hsl(237, 49%, 15%)
      )`;
    });
    choosingWinner();
  });
};
afterChoosed();
