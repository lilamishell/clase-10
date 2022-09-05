
var trex ,trex_running;
function preload(){
  tireximg = loadAnimation("trex1.png","trex3.png","trex4.png");
  sueloimg = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  tirex = createSprite(50,150);
  tirex.addAnimation("runing",tireximg);
  tirex.scale=0.5;
  suelo = createSprite(200,180);
  suelo.addImage(sueloimg);
 
}

function draw(){
  background("white");
  if(keyDown("space")){
    tirex.velocityY =-3;
  }
  tirex.velocityY=tirex.velocityY +0.5;
  tirex.collide(suelo);
  drawSprites();


}
