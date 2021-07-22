var jaxon,jaxon_running
var path,pathIMG
var invis1,invis2
function preload(){
  //pre-load images
jaxon_running= loadAnimation ("runner-1.png","runner-2.png")
pathIMG=loadImage("path.png")
}

function setup(){
  createCanvas(1800,1000);
  //create sprites here
  jaxon=createSprite (900,500)
  jaxon.addAnimation("running",jaxon_running)
  jaxon.scale=0.2
  path=createSprite(900,500)
  path.addAnimation("image of it",pathIMG)
  jaxon.depth=path.depth+0.0000000001
  path.scale=3
  jaxon.scale=0.1
  invis1=createSprite(500,200,20,2000)
  invis2=createSprite(1300,200,20,2000)
  invis1.visible=false
  invis2.visible=false
}

function draw() {
  background(0);
  path.velocityY=5
  if (path.y===870){
    path.y=500
  }
  
  jaxon.x=mouseX
  jaxon.collide(invis1)
  jaxon.collide(invis2)
  if (jaxon.x<600){
    jaxon.x=600
  }
  if (jaxon.x>1200){
    jaxon.x=1200
  }
  drawSprites()
}
