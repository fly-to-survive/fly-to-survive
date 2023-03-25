window.onload = () => {
  localStorage.setItem("highscore", 0);
  this.gameOn = false;
  this.canvas = document.querySelector("#myCanvas");
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 32 && !gameOn) {
      Game.init();
      gameOn = true;
    }
    if (e.keyCode == 82 && gameOn) {
      Game.init();
      canvas.style.border = "6px solid rgb(165, 99, 42)";
    }
  });
};
