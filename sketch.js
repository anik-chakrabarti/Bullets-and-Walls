var bullet, wall;
var speed, weigth ;
var thickness;

function setup() {

  createCanvas(1350,200);

  speed = random(55,90);
  weigth = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(200,100,60,30);
  wall = createSprite(1200,100,thickness,height/2);

  bullet.shapeColor = "white" ;
  
  bullet.velocityX = speed ;

}

function draw() {

  background(0); 
  
  if(wall.x- bullet.x < (bullet.width + wall.width)/2 ){

    var deformation = (0.5* weigth * speed * speed )/ (thickness*thickness*thickness) ; 
    bullet.velocityX = 0 ;

  if(deformation>180){
     bullet.shapeColor= color(255,0,0)  ;
  }
  if(deformation<180 && deformation> 100){
    bullet.shapeColor = color(230,230,0);
 }
 if(deformation<100){
    bullet.shapeColor = color(0,255,0) ;
 }
} 
  drawSprites();
}