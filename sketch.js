var wall, thickness;
var bullet, speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);

thickness=random(22,83);




bullet= createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.shapeColor=(225);




wall= createSprite(1200,200,thickness,height/2);


wall.shapeColor=color(230,220,230);
//wall.shapeColor=color(80,80,80);


function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollider(bullet,wall))
   { 


    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage=>10)
  {

       wall.shapeColor=color(255,0,0);


}






if(damage<10)
{
wall.shapeColor=color(0,255,0);
}

   }


 drawSprites();


}




function hasCollided(1bullet,1wall)
{

         bulletRightEdge=1bullet.x+1bullet.widht;
         walletLeftEdge=1wall.x;
     if(bulletRightEdgez>=wallLeftEdge)

     {

        return true


     }
    
       return false;
}