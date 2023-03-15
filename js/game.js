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
    this.music = new Audio("./music/test-music.mp3");
    this.music.volume = 0.2;
    //3. Create chainsaw
    this.chainsawDown = new Chainsaw(this.ctx,this.width, this.height);
    //4. Create chainsaw Up
    this.chainsawUp = new ChainsawUp(this.ctx,this.width, this.height);
  },

  drawAll() {
    //1. Draw background
    this.background.draw();
    //2. Draw player
    this.player.draw();
    //3. Draw chainsaws array
    this.chainsawDown.draw();
    this.chainsawUp.draw();
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  isCollistion() {},

  gameOver() {},
};
