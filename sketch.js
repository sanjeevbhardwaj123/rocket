var iss,spaceCraft;
var hasDocked = false
var iss_Img,scImg1,scImg2,scImg3,scImg4,bg
function preload(){
     iss_Img = loadImage("iss.png")
     bg = loadImage("spacebg.jpg")
     scImg1 = loadImage("spacecraft1.png")
     scImg2 = loadImage("spacecraft2.png")
     scImg3 = loadImage("spacecraft3.png")
     scImg4 = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285,240)
  spaceCraft.addImage("spacecraft",scImg1)
  spaceCraft.scale = 0.15

  iss = createSprite(330,130)
  iss.addImage("iss",iss_Img)
  iss.scale = 0.25

}

function draw() {
  background(bg);  
  if(!hasDocked){
   spaceCraft.x = spaceCraft.x+random(-1,1)
   if(keyDown(UP_ARROW)){
     spaceCraft.y = spaceCraft.y-2 
   }
   if(keyDown(LEFT_ARROW)){
     spaceCraft.addImage(scImg4)
    spaceCraft.x = spaceCraft.x-2 
  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.addImage(scImg3)
   spaceCraft.x = spaceCraft.x+2 
 }
 if(keyDown(DOWN_ARROW)){
  spaceCraft.addImage(scImg2)

}
  }
  if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("docking successfull",200,300)
  }
  drawSprites();
}



