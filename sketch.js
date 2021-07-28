var boy, boyImg, track, trackImg, lboundary, rboundary;
function preload(){
  //pre-load images
  trackImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200);
  track.addImage(trackImg)
  track.velocityY = 5;
  

  boy = createSprite(180, 340, 30, 30);
  boy.addAnimation("runningBoy", boyImg)
  boy.scale = 0.05;

  lboundary = createSprite(0, 0, 100, 800);
  rboundary = createSprite(400, 0, 100, 800);
  lboundary.visible = false;
  rboundary.visible = false;
}

function draw() {
  if(track.y > 400) {
    track.y = height/2;
  }
  boy.x = World.mouseX;
  background(0);
drawSprites();
}
