import {speak} from "./sound.js";

const checkbox = document.querySelector('input[type="checkbox"]');
const startBtn = document.getElementById("start-game");
const repeatBtn = document.getElementById("repeat-word");
const cards = document.querySelectorAll(".memory-card");
const guesses = document.querySelector(".guesses-container")
const popup = document.getElementById("popup")

let isPlaying = false;
let isGuessing = false;
let count = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
const correct = new Audio("../../assets/sound/correct.mp3");
const wrong = new Audio("../../assets/sound/wrong.mp3");
const win = new Audio("../../assets/sound/win.mp3");
const lose = new Audio("../../assets/sound/sad_violin.mp3");
const close = new Audio("../../assets/sound/close.mp3");

checkbox.addEventListener('change', function () {
  if (isGuessing) {
    document.location.reload()
  }
  document.querySelectorAll(".memory-card").forEach(card => {
    card.classList.toggle("playing");
  });
  document.querySelectorAll(".memory-description").forEach(des => {
    des.classList.toggle("playing");
  });
  document.querySelectorAll(".front").forEach(front => {
    front.classList.toggle("playing");
  });
  document.querySelectorAll(".memory-flip-btn").forEach(btn => {
    btn.classList.toggle("playing");
  });
  startBtn.classList.toggle("playing");
  if (checkbox.checked) {
    isPlaying = true;
    console.log('Playing');
  } else {
    isPlaying = false;
    console.log('Training');
  }
});

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function finishGame(correct, wrong) {
  const title = document.querySelector(".popup__title");
  const text = document.querySelector(".popup__text");
  const pic = document.querySelector(".popup__img")
  if (!wrong) {
    pic.src = "../../assets/images/finish/happy.png";
    title.textContent = "Perfect";
    text.textContent = "I see no mistakes here! Go to the next category =)";
    win.play()
  } else if (wrong === 1) {
    pic.src = "../../assets/images/finish/close.png"
    document.querySelector(".popup__title").textContent = "It was close!";
    text.textContent = `You made ${wrong} mistake`;
    close.play()
  } else {
    pic.src = "../../assets/images/finish/sad.png"
    document.querySelector(".popup__title").textContent = "You can do better...";
    text.textContent = `You made ${wrong} mistakes`;
    lose.play()
  }
  popup.classList.toggle("open");
  setTimeout('location.replace("../../index.html")',5000);
}

function pickCard(words) {
  isGuessing = true;
  speak(words[count]);
  cards.forEach(x => x.addEventListener("click", function () {
    if (x.className.includes("disabled")) return;
    if (x.id === words[count]) {
      x.classList.add("disabled")
      correct.play();
      count += 1;
      correctAnswers += 1;
      guesses.insertAdjacentHTML("afterbegin", "<img class='guess' src='../../assets/images/icons/correct.svg' alt=''>")
      setTimeout(() => speak(words[count]), 1000);
      if (count === 8) {
        finishGame(correctAnswers, wrongAnswers);
      }
    } else {
      wrong.play();
      wrongAnswers += 1;
      guesses.insertAdjacentHTML("afterbegin", "<img class='guess' src='../../assets/images/icons/wrong.svg' alt=''>")
    }
  }));
}

const gameLoop = () => {
  startBtn.classList.toggle("playing");
  repeatBtn.classList.toggle("playing");
  repeatBtn.addEventListener("click", function () {
    speak(words[count])
  });

  let words = [];
  cards.forEach(x => words.push(x.id));
  words = shuffle(words);
  pickCard(words)
}

startBtn.addEventListener("click", gameLoop)

export {isPlaying};
