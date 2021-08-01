var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg, leafImg, leaf;
var chance, score = 0;
var appleG, leafG;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(500,400);
  
  garden=createSprite(250,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.05;
  rabbit.addImage(rabbitImg);

  appleG = createGroup();
  leafG = createGroup();
  }


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  chance = Math.round(random(1,2));

  if(frameCount%80 === 0){
    if(chance == 1){
      create_apple();
    }
    else {
      create_leaf();
    }
  }

  if(rabbit.isTouching(appleG)){
    score+=2;
    apple.destroy();
  }
  if(rabbit.isTouching(leafG)){
    score+=1;
    leaf.destroy();
  }
  drawSprites();
  fill(255);
  textSize(24);
  text("Score: "+ score, 360,380);
}

function create_apple(){
  apple = createSprite(random(50, 450), 30, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY =  20;
  apple.lifetime=20;
  appleG.add(apple);
}
function create_leaf(){
  leaf = createSprite(random(50, 450), 30, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.075;
  leaf.velocityY =  15;
  leaf.lifetime=25;
  leafG.add(leaf);
}