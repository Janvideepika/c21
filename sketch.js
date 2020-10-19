var fixedrect;
var movingrect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
 // fixedrect.velocityX=-4;
  
  movingrect=createSprite(200, 200, 100, 50);
 // movingrect.velocityX=4;

 o1=createSprite(100,100,50,50);
 o2=createSprite(200,100,50,50);
 o3=createSprite(300,100,50,50);
 o4=createSprite(400,100,50,50);


  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  o1.shapeColor="green";
  o2.shapeColor="green";
  o3.shapeColor="green";
o4.shapeColor="green";
o3.velocityX=3;
o4.velocityX=-3;

function isTouching(o1,o2){
  if(o2.x-o1.x<=o2.width/2+o1.width/2 && o1.x-o2.x<=o2.width/2+o1.width/2 && o2.y-o1.y<=o2.height/2+o1.height/2 && o1.y-o2.y<=o2.height/2+o1.height/2  ){
    return true;
    
    }
    else{
     return false;
    }
}
function bounceoff(o1,o2){
  if(o2.x-o1.x<=o2.width/2+o1.width/2 && o1.x-o2.x<=o2.width/2+o1.width/2){
o2.velocityX=o2.velocityX*(-1);
o1.velocityX=o1.velocityX*(-1);
    
  }
}



  movingrect.debug=true;
  fixedrect.debug=true;



  
}

function draw() {
  background(0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

if(isTouching(o1,movingrect)||isTouching(o2,movingrect)||isTouching(o3,movingrect)||isTouching(o4,movingrect)){
  movingrect.shapeColor="red";
  o1.shapeColor="red";
  o2.shapeColor="red";
  o3.shapeColor="red";
  o4.shapeColor="red";

}
else{
  movingrect.shapeColor="green";
  o1.shapeColor="green";
  o2.shapeColor="green";

  o3.shapeColor="green";

  o4.shapeColor="green";

}
//isTouching();
bounceoff(o3,o4);
  drawSprites();
}

