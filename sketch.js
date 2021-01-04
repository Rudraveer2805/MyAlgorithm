var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,1000);
speed=random(55,90);
weight=random(400,1500);

 car = createSprite(50, 200, 65, 65);
 wall = createSprite(800,200,60,200);

 car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x < ((car.width/2)+(wall.width/2))){
var deformation=0.5*weight*speed*speed/22509;
car.velocityX=0;
if(deformation>=180){
  car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100) {
  car.shapeColor=color(230,230,0);
}
if (deformation<100) {
  car.shapeColor=color(0,255,0);
}
}

  drawSprites();
}