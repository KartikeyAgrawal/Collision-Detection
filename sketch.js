var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,100,20);
  fixedRect = createSprite(100,200,70,30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor="green";
  movingRect.velocityX=-2;
  fixedRect.velocityX=2;
}

function draw() {
  background(255,255,255);  
/* movingRect.x= World.mouseX;
 movingRect.y= World.mouseY; */
 console.log(movingRect.x-fixedRect.x);
 /*if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.x/2+fixedRect.width/2 && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
   fixedRect.shapeColor="blue";
   movingRect.shapeColor="blue";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor="green";
 }*/
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
 {
   movingRect.velocityX=movingRect.velocityX*-1;
   fixedRect.velocityX=fixedRect.velocityX*-1;
 }
  drawSprites();
}