# Fly to Survive

## Game access

[PLAY!](https://fly-to-survive.github.io/fly-to-survive/)

## Description

Obstacle game. The aim of this game is to make the character fly while trying to avoid the saws that will be appearing on the sides and collecting items to increase the score. The game ends when a chainsaw hits you.

## Instructions

Use `Spacebar` to fly.\
Use `R` to reload the game once you have died.

## Project phases

### Phase I: MVP

Single player game. The character flies when the spacebar is pressed. The character turns around when it reaches a wall.

### Phase II

Fruit appears and increases score when collected. Sound FX added. Score counter added. Start screen and game over screen added.

### Phase III

Level up. Lower and upper walls disappear and allow the character to move across the game screen vertically without obstacles. Speed increased.

## Data structure

#### index.js

```Javascript
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
```

#### game.js

```Javascript
const Game = {

  init() {}

  setContext() {}

  setDimensions() {}

  toggleScreen(id, toggle) {}

  start() {}

  reset() {}

  clear() {}

  drawAll() {}

  isCollisionChainsaw(chainsaw, player, chainsawPosition) {}

  generateFruit() {}

  clearFruit() {}

  drawHighscore() {}

  isCollsionFruit(fruit) {}

  gameOver() {}

  drawGameOver() {}
}
```

#### player.js

```Javascript
class Player {
  constructor(ctx, gameW, gameH, key, score, nextLevel) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    this.image.src = "./images/spriteBirdRight.png";
    this.image.frames = 14;
    this.image.framesIndex = 0;

    this.posX = this.gameWidth / 2;
    this.posY = this.gameHeight / 2;
    this.posY0 = this.posY;

    //Lateral movement
    this.velX = 5;
    this.right = true;

    //Jump
    this.impulse = 40;
    this.velY = 1;
    this.gravity = 0.4;

    this.key = key;

    this.score = 0;
    this.nextLevel = nextLevel;

    this.setListener();
  }

  draw(framesCounter) {}

  animate(framesCounter) {}

  move(score, nextLevel) {}

  setListener() {}

  jump() {}
}
  ```

#### chainsaw.js

```Javascript
class Chainsaw {
  constructor(
    ctx,
    gameWidth,
    gameHeight,
    chainsawWidth,
    chainsawHeight,
    posX,
    posY,
    vel,
    isLateral
  ) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = chainsawWidth;
    this.height = chainsawHeight;
    this.posX = posX;
    this.posY = posY;
    this.image = new Image();
    this.image.src = "./images/sawBladeSprite.png";
    this.image.frames = 2;
    this.image.framesIndex = 0;

    this.vel = vel;
    this.isLateral = isLateral;
    this.wayLimit = true;
  }

  draw(framesCounter) {}

  animate(framesCounter) {}

  move() {}
}
```

#### fruit.js

```Javascript
class Fruit {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = 70;
    this.height = 70;
    this.posX = Math.floor(Math.random() * (this.gameW - this.width));
    this.posY = Math.floor(Math.random() * (this.gameH - this.height));
    this.image = new Image();
    this.image.src = "./images/blackberry.png";
    this.counter = 0;
  }

  draw() {}
}
```

#### score.js

```Javascript
class Score {
  constructor(ctx, gameW, gameH) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.width = 200;
    this.height = 200;

    this.posX = gameW / 2;
    this.posY = gameH / 2;
  }

  drawScore(score) {}
}
```

## Assets

![Player sprite](https://github.com/fly-to-survive/fly-to-survive/blob/main/images/spriteBirdRight.png)

![Background](https://github.com/fly-to-survive/fly-to-survive/blob/main/images/background.jpg)

![Chainsaw sprite](https://github.com/fly-to-survive/fly-to-survive/blob/main/images/sawBladeSprite.png)

## Links

#### Trello

[Link to Trello](https://trello.com/b/l6UDcmqA/fly-to-survive)

#### Github

[Link to Github](https://github.com/fly-to-survive/fly-to-survive)

#### Slides

[Link to Slides](https://slides.com/jaeg90/fly-to-survive)
