window.onload = () => {
  this.gameOn = false;
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 32 && !gameOn) {
      Game.init();
      gameOn = true;
    }
    if (e.keyCode == 82 && gameOn) {
      Game.init();
    }
  });
};
