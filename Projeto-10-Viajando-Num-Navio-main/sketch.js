var sea,ship;
var seaImg,shipImg;
var bounce1,bounce2;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
    
  
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  bounce1 = createSprite(200,350,400,10);
  bounce2 = createSprite(200,80,400,10);
  bounce1.visible = false;
  bounce2.visible = false;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

  ship.velocityY = 1;
}

function draw() {
  background(0);
  sea.velocityX = -3;
 
 
  ship.bounceOff(bounce1) 
  ship.bounceOff(bounce2)
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = 400;
  }
    
  drawSprites();
}
