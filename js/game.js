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

  key: {
    SPACE: 32,
  },

  init() {
    this.setContext();
    this.setDimensions();
    this.start();
  },
  setContext() {
    this.canvas = document.querySelector("#myCanvas");
    this.ctx = this.canvas.getContext("2d");
  },
  setDimensions() {
    this.width = window.innerWidth - 100;
    this.height = window.innerHeight - 100;

    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
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
      this.drawAll();
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
  },

  drawAll() {
    //1. Draw background
    this.background.draw();
    //2. Draw player
    this.player.draw();
    //3. Draw chainsaws array
    this.chainsawDown.draw(this.framesCounter);
    this.chainsawUp.draw();
    this.chainsawL.draw();
    this.chainsawR.draw();
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  isCollision() {
    //1. chainsawDow - Not competed
    if (
      this.player.posX > this.chainsawDown.posX &&
      this.player.posX < this.chainsawDown.posX + this.chainsawDown.width &&
      this.player.posY + this.player.height > this.chainsawDown.posY
    ) {
      return true;
    }
  },

  gameOver() {
    clearInterval(this.interval);
  },
};
