function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const pad = document.querySelector(`.pad[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
}

// Keyboard events
document.addEventListener("keydown", (e) => {
  playSound(e.keyCode);
});

// Mouse click events
document.querySelectorAll(".pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    playSound(this.dataset.key);
  });
});
