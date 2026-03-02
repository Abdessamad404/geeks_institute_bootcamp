function playSound(keyValue) {
  const key = String(keyValue).toLowerCase();
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const pad = document.querySelector(`.pad[data-key="${key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
}

// Keyboard events
document.addEventListener("keydown", (e) => {
  playSound(e.key);
});

// Mouse click events
document.querySelectorAll(".pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    playSound(this.dataset.key);
  });
});
