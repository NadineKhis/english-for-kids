import {isPlaying} from "./game.js";

const speak = (word) => {
  let voices = speechSynthesis.getVoices();
  let utterance = new SpeechSynthesisUtterance(word);
  utterance.voice = voices[1];
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
  word = '';
}

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    if (isPlaying) return
    speak(card.id)
  });
});

export {speak}