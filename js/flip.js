import {isPlaying} from "./game.js";

// FLip a card

const flipBtn = document.querySelectorAll(".memory-flip-btn");
const cards = document.querySelectorAll(".memory-card");
let isFlipped = false

function flipCard() {
  if (isPlaying) return;
  if (!isFlipped) {
    let cardFlipped = this.closest(".memory-card");
    cardFlipped.classList.toggle("flip");
    isFlipped = true;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function autoClose() {
  if (isPlaying) return;
  if (isFlipped) {
    sleep(1000).then(() => {
      let cardFlipped = this.closest(".memory-card");
      if (cardFlipped.className === "memory-card flip") this.classList.remove("flip");
      isFlipped = false;
    })
  }
}

flipBtn.forEach(btn => btn.addEventListener("click", flipCard));
cards.forEach(card => card.addEventListener("mouseleave", autoClose));
