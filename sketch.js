let frog;
let car1;
let goa1,goa2,goa3;
let sound_hit;

function preload() {
  sound_hit = loadSound('hit.wav');
}

function setup() {
  createCanvas(400, 400);

  resetGame();

}

function draw() {
  background(220);


  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
  }



  if (frog.bounce(car1)) {
    sound_hit.play();
  }

  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);


  if (frog.overlap(goa1)) {
    wrongLevel();
  }
  drawSprites();
  checkGameOver();

}


function resetGame() {
  frog = createSprite(width/2, height-30, 20, 40);
  goa1 = createSprite(width/2, 0, width, 4);
  car1 = createSprite(0, height/2, 60, 30);

  car1.setVelocity(random(3, 10), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
}


function checkGameOver() {
  if (frog.position.x <= 0 || width <= frog.position.x) {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);

  }
}


function wrongLevel() {
  background(0,0,0,)
}


function playHitSound() {
  sound_hit.play();
}
