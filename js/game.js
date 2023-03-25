const Game = {
  //1. Canvas definition
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 1,
  //2. Player definition
  player: undefined,
  //3. Score definition
  score: undefined,
  scoreScreen: undefined,
  //4. Music definition
  music: undefined,
  //5. Chainsaw definition
  chainsawDown: undefined,
  chainsawUp: undefined,
  chainsawLeft: undefined,
  chainsawRight: undefined,
  chainsawWidth: 250,
  chainsawHeight: 250,
  cropImageShort: 80,
  cropImageLong: 170,
  adjutsTouchShort: 20,
  adjustTouchLong: 40,
  chainsawSound: undefined,

  //6. Fruit definition
  fruits: undefined,
  fruitsSound: undefined,
  //7. Control definition
  key: {
    SPACE: 32,
  },
  seconds: undefined,

  init() {
    this.toggleScreen("startScreen", false);
    this.toggleScreen("myCanvas", true);
    this.setContext();
    this.setDimensions();
    this.start();
  },
  setContext() {
    this.canvas = document.querySelector("#myCanvas");
    this.ctx = this.canvas.getContext("2d");
  },
  setDimensions() {
    this.width = window.innerWidth * 0.9;
    this.height = window.innerHeight * 0.9;

    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
  },

  toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = toggle ? "block" : "none";
    element.style.display = display;
  },

  start() {
    this.reset();

    this.interval = setInterval(() => {
      this.framesCounter++;

      if (this.framesCounter > 59) {
        this.framesCounter = 0;
        this.seconds++;
        this.fruits.forEach((fruit) => {
          fruit.counter++;
        });
      }

      //1. Clear canvas
      this.clear();
      //2. Dran elements
      this.drawAll(this.framesCounter);
      //3. Check if isCollision and invoke .gameOver
      if (this.score <= 2) {
        if (this.isCollisionChainsaw(this.chainsawDown, this.player, "Down")) {
          this.gameOver();
        }
        if (this.isCollisionChainsaw(this.chainsawUp, this.player, "Up")) {
          this.gameOver();
        }
      }
      if (this.isCollisionChainsaw(this.chainsawLeft, this.player, "Left")) {
        this.gameOver();
      }
      if (this.isCollisionChainsaw(this.chainsawRight, this.player, "Right")) {
        this.gameOver();
      }
      //4. Music
      this.music.play();
      //5. Fruit
      this.generateFruit();
      this.clearFruit();
      //6. Next Level
      if (this.score >= 2) {
        let canvas = document.querySelector("#myCanvas");
        canvas.style.borderTop = "none";
        canvas.style.borderBottom = "none";
      }
    }, 1000 / this.FPS);
  },

  reset() {
    //1. Create player
    this.player = new Player(this.ctx, this.width, this.height, this.key);
    //2. Music
    this.music = new Audio("./music/Flight_of_the_Bumblebee.mp3");
    this.music.volume = 0.2;
    //3. Create chainsaws
    this.chainsawDown = new Chainsaw(
      this.ctx,
      this.width,
      this.height,
      this.chainsawWidth,
      this.chainsawHeight,
      this.width,
      this.height - this.cropImageShort,
      10,
      false
    );
    this.chainsawUp = new Chainsaw(
      this.ctx,
      this.width,
      this.height,
      this.chainsawWidth,
      this.chainsawHeight,
      -this.chainsawWidth,
      -this.cropImageLong,
      10,
      false
    );
    this.chainsawLeft = new Chainsaw(
      this.ctx,
      this.width,
      this.height,
      this.chainsawWidth,
      this.chainsawHeight,
      -this.cropImageLong,
      -this.chainsawHeight,
      5,
      true
    );
    this.chainsawRight = new Chainsaw(
      this.ctx,
      this.width,
      this.height,
      this.chainsawWidth,
      this.chainsawHeight,
      this.width - this.cropImageShort,
      this.height,
      5,
      true
    );
    //4. Create fruit
    this.fruits = [];
    //5. Score
    this.score = 0;
    (this.scoreScreen = new Score(this.ctx, this.width, this.height)),
      //6. Seconds
      (this.seconds = 0);
    //7. Sounds
    this.chainsawSound = new Audio("./soundFX/chainsawFX.mp3");
    this.chainsawSound.volume = 0.3;
    this.fruitsSound = new Audio("./soundFX/sonicRing.mp3");
    this.fruitsSound.volume = 0.3;
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll() {
    //1. Draw score
    this.scoreScreen.drawScore(this.score);
    //2. Draw player
    this.player.draw(this.framesCounter);
    //3. Draw chainsaws array
    if (this.score <= 2) {
      this.chainsawDown.draw(this.framesCounter);
      this.chainsawUp.draw(this.framesCounter);
    }
    this.chainsawLeft.draw(this.framesCounter);
    this.chainsawRight.draw(this.framesCounter);
    //4. Draw fruit
    this.fruits.forEach((fruit) => {
      fruit.draw();
    });
  },

  isCollisionChainsaw(chainsaw, player, chainsawPosition) {
    // Down/Up
    if (
      player.posX > chainsaw.posX &&
      player.posX + this.adjustTouchLong < chainsaw.posX + chainsaw.width &&
      ((player.posY + player.height - this.adjutsTouchShort > chainsaw.posY &&
        chainsawPosition === "Down") ||
        (player.posY < chainsaw.posY + chainsaw.width - this.adjutsTouchShort &&
          chainsawPosition === "Up"))
    ) {
      return true;
    }

    if (
      player.posX + player.width - chainsaw.posX - this.adjustTouchLong > 0 &&
      player.posX + player.width < chainsaw.posX + chainsaw.width &&
      ((player.posY + player.height - this.adjutsTouchShort > chainsaw.posY &&
        chainsawPosition === "Down") ||
        (player.posY < chainsaw.posY + chainsaw.height - this.adjustTouchLong &&
          chainsawPosition === "Up"))
    ) {
      return true;
    }

    //Left/Right
    if (
      player.posY > chainsaw.posY &&
      player.posY + this.adjustTouchLong < chainsaw.posY + chainsaw.width &&
      ((player.posX < chainsaw.posX + chainsaw.width - this.adjustTouchLong &&
        chainsawPosition === "Left") ||
        (player.posX + player.width - this.adjutsTouchShort > chainsaw.posX &&
          chainsawPosition === "Right"))
    ) {
      return true;
    }
    if (
      player.posY + player.width - chainsaw.posY - this.adjustTouchLong > 0 &&
      player.posY + player.width < chainsaw.posY + chainsaw.width &&
      ((player.posX < chainsaw.posX + chainsaw.width - this.adjustTouchLong &&
        chainsawPosition === "Left") ||
        (player.posX + player.width - this.adjutsTouchShort > chainsaw.posX &&
          chainsawPosition === "Right"))
    ) {
      return true;
    }
  },

  generateFruit() {
    if (
      this.seconds > 0 &&
      this.seconds % 5 == 0 &&
      this.fruits.length < 2 &&
      this.framesCounter % 60 === 0
    ) {
      this.fruits.push(new Fruit(this.ctx, this.width, this.height));
    }
  },

  clearFruit() {
    this.fruits = this.fruits.filter((fruit) => {
      if (this.isCollsionFruit(fruit)) {
        this.score++;
        this.fruitsSound.cloneNode(true).play();
        return false;
      }
      if (fruit.counter > 0 && fruit.counter % 10 == 0) {
        return false;
      }
      return true;
    });
  },

  drawHighscore() {
    if (this.score > localStorage.getItem("highscore")) {
      localStorage.setItem("highscore", this.score);
    } else {
      localStorage.getItem("highscore");
    }
  },

  isCollsionFruit(fruit) {
    return (
      ((this.player.posX >= fruit.posX &&
        fruit.posX + fruit.width >= this.player.posX) ||
        (this.player.posX + this.player.width > fruit.posX &&
          fruit.posX + fruit.width >= this.player.posX + this.player.width)) &&
      ((this.player.posY > fruit.posY &&
        fruit.posY + fruit.height > this.player.posY) ||
        (this.player.posY + this.player.height > fruit.posY &&
          fruit.posY + fruit.height > this.player.posY + this.player.height))
    );
  },

  gameOver() {
    clearInterval(this.interval);
    this.drawHighscore();
    this.music.currentTime = 1000;
    this.chainsawSound.play();
    this.drawGameOver();
  },
  drawGameOver() {
    this.ctx.fillStyle = "rgba(0,0,0,0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "red";
    this.ctx.font = "50px Arial";
    this.ctx.fillText(
      `YOU DIED`,
      this.canvas.width / 2,
      this.canvas.height / 2 - 50
    );

    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(
      `Push 'R' to try again`,
      this.canvas.width / 2,
      this.canvas.height / 2
    );

    this.ctx.fillStyle = "rgba(212,175,55)";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(
      `Highscore ${localStorage.getItem("highscore")}`,
      this.canvas.width / 2,
      this.canvas.height / 2 + 70
    );
  },
};
