let frog;
let frogSize;
let car1
let goa1,goa2,goa3;
let sound_hit;
let road;
let stage=0;

function preload() {
  sound_hit = loadSound('hit.wav');
}

function setup() {
  createCanvas(400, 400);
  frogSize=20;
  resetGame();

}

function draw() {
  background(100,150,130);
  noStroke();
  fill(50);


  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
  }
  if(stage==0){
    rect(0,height/2-50,width,height/4);
    if(frog.position.y==height-30){
    fill(255);
    textSize(32);
    text('Find your way', width/2-100, 310);
    }
  }
  if(stage==1){
    rect(0,0,400,400);
    fill(255);
    textSize(32);
    text('Confusion', width/2, 250);
    goa1.remove();
    goa2.remove();
    goa3.remove();
    car1 = createSprite(random(0,400), height/2, 60, 30);
    car1.setVelocity(random(3, 10));
    frogSize=30;
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
  print("1");

  frog = createSprite(width/2, height-30, frogSize,frogSize);
  goa1 = createSprite(width/2, 0, width, 4);
  goa2 = createSprite(405, height/2-124, 20, 147);
  goa3 = createSprite(-5, height/2-124, 20, 147);
  car1 = createSprite(0, height/2, 60, 30);

  car1.setVelocity(random(3, 10), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
  if (keyCode == LEFT_ARROW) {
    frog.position.x -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    frog.position.x += 10;
  }
  if(keyCode==32){
    stage=0;
    car1.remove();
    frog.remove();
    resetGame();
    draw();
  }
}


function checkGameOver() {
  if(frogSize<60){
  if (frog.bounce(car1)) {
    sound_hit.play();
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    car1.position.x=-50;
    car1.position.y=-50;
    frog.position.x=-300;
    car1.position.x=-300;
    goa1.remove();
    goa2.remove();
    goa3.remove();
    resetGame();
    frogSize+=10;
    if(stage==1)
    {
      stage=0;
    }
}
}
}


function wrongLevel() {
  frog.position.x=width/2;
  frog.position.y=height-30;
  stage=1;

}


function playHitSound() {
  sound_hit.play();
}
