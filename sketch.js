var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf;
var appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples() {
  if(frameCount % 80 === 0){
    apple = createSprite(Math.round(random(25,200)),25)
    apple.velocityY = 2
    apple.lifetime = 100
    apple.addImage(appleImg);
    apple.scale = 0.1
  }
}

function createLeaves() {
  if(frameCount % 80 === 0){
    leaf = createSprite(Math.round(random(200,375)),25)
    leaf.velocityY = 2
    leaf.lifetime = 100
    leaf.addImage(leafImg);
    leaf.scale = 0.1
  }
}
function draw() {
  background(0);
  createApples();
  createLeaves();
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
