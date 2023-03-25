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

## Data structure

#### index.js

```
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

``

#### player.js

``

#### chainsaw.js

``

#### fruit.js

` `

#### score.js

` `

## Assets

## Links

#### Trello

[Link to Trello](https://trello.com/b/l6UDcmqA/fly-to-survive)

#### Github

[Link to Github](https://github.com/fly-to-survive/fly-to-survive)

#### Slides

[Link to Slides]()
