const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  score: undefined,
  music: undefined,
  chainsawDown: undefined,
  chainsawUp: undefined,
  chainsawL: undefined,
  chainsawR: undefined,
  fruit: undefined,

  key: {
    SPACE: 32,
  },

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
      if (this.framesCounter > 3000) {
        this.framesCounter = 0;
      }

      //1. Clear canvas
      this.clear();
      //2. Dran elements
      this.drawAll(this.framesCounter);
      //3. Move chainsaws
      //4. Clear chainsaws
      //5. Check if isCollision and invoke .gameOver
      if (this.isCollision()) {
        this.gameOver();
      }
      //6. Music
      this.music.play();
    }, 1000 / this.FPS);
  },

  reset() {
    //1. Create background
    this.background = new Background(this.ctx, this.width, this.height);
    //2. Create player
    this.player = new Player(this.ctx, this.width, this.height, this.key);
    //4. Music
    this.music = new Audio("./music/Flight_of_the_Bumblebee.mp3");
    this.music.volume = 0.2;
    //3. Create chainsaws
    this.chainsawDown = new Chainsaw(this.ctx, this.width, this.height);
    this.chainsawUp = new ChainsawUp(this.ctx, this.width, this.height);
    this.chainsawL = new ChainsawL(this.ctx, this.width, this.height);
    this.chainsawR = new ChainsawR(this.ctx, this.width, this.height);
    //5. Create fruit
    this.fruit = new Fruit(this.ctx, this.width, this.height);
  },

  drawAll() {
    //1. Draw background
    //this.background.draw();
    //2. Draw player
    this.player.draw(this.framesCounter);
    //3. Draw chainsaws array
    this.chainsawDown.draw(this.framesCounter);
    this.chainsawUp.draw(this.framesCounter);
    this.chainsawL.draw(this.framesCounter);
    this.chainsawR.draw(this.framesCounter);
    //4. Draw fruit
    this.fruit.draw();
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  isCollision() {
    //1. chainsawDow
    if (
      this.player.posX > this.chainsawDown.posX &&
      this.player.posX + 40 <
        this.chainsawDown.posX + this.chainsawDown.width &&
      this.player.posY + this.player.height - 20 > this.chainsawDown.posY
    ) {
      return true;
    }
    if (
      this.player.posX + this.player.width - this.chainsawDown.posX - 40 > 0 &&
      this.player.posX + this.player.width <
        this.chainsawDown.posX + this.chainsawDown.width &&
      this.player.posY + this.player.height - 20 > this.chainsawDown.posY
    ) {
      return true;
    }

    //2. chainsawUp
    if (
      this.player.posX > this.chainsawUp.posX &&
      this.player.posX + 80 < this.chainsawUp.posX + this.chainsawUp.width &&
      this.player.posY < this.chainsawUp.posY + this.chainsawUp.width - 40
    ) {
      return true;
    }
    if (
      this.player.posX + this.player.width - this.chainsawUp.posX - 40 > 0 &&
      this.player.posX + this.player.width <
        this.chainsawUp.posX + this.chainsawUp.width &&
      this.player.posY < this.chainsawUp.posY + this.chainsawUp.width - 40
    ) {
      return true;
    }

    //3. chainsawL
    if (
      this.player.posY > this.chainsawL.posY &&
      this.player.posY + 80 < this.chainsawL.posY + this.chainsawL.width &&
      this.player.posX < this.chainsawL.posX + this.chainsawL.width - 40
    ) {
      return true;
    }
    if (
      this.player.posY + this.player.width - this.chainsawL.posY - 40 > 0 &&
      this.player.posY + this.player.width <
        this.chainsawL.posY + this.chainsawL.width &&
      this.player.posX < this.chainsawL.posX + this.chainsawL.width - 40
    ) {
      return true;
    }

    //4. chainsawR
    if (
      this.player.posY > this.chainsawR.posY &&
      this.player.posY + 80 < this.chainsawR.posY + this.chainsawR.width &&
      this.player.posX + this.player.width - 20 > this.chainsawR.posX
    ) {
      return true;
    }
    if (
      this.player.posY + this.player.width - this.chainsawR.posY - 40 > 0 &&
      this.player.posY + this.player.width <
        this.chainsawR.posY + this.chainsawR.width &&
      this.player.posX + this.player.width - 20 > this.chainsawR.posX
    ) {
      return true;
    }
  },

  gameOver() {
    clearInterval(this.interval);
  },
};
