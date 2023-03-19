window.onload = () => {
  gameOn = false;
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 32 && !gameOn) {
      Game.init();
      gameOn = true;
    }
  });
};
