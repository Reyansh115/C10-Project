var seaImg 
var shipImg1


function preload(){

   seaImg = loadimage("sea.png")
   shipImg1 = loadAnimation("ship-1.png")


}

function setup(){
  createCanvas(400,400);

  shipImg1 = createSprite(50,160,20,50);
  shipImg1.addAnimation("ship-1.png");
  edges = createEdgeSprites();
  
  
  shipImg.Img.scale = 0.5;
  shipImg.x = 50;
  
  seaImg = createSprite(200,180,400,20);
  seaImg.addImage(sea.png)
  seaImg.x = seaImg.width/2;
  
}

function draw() {
  background("blue");

  background("white");
 seaImg.velocityX = -2;
  console.log(seaImg.x);
  

  console.log(seaImg.y)
  if(seaImg.x<0)
  {
seaImg.x = seaImg.width/2;

  }
 
}
