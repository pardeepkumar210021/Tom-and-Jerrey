var bgImg,catImg2,mouseimg2,catImg1,catImg3,mouse;
var cat,mouseimg1,mouseimg3,bg,canvas;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png ","images/cat3.png" );
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseimg3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here

    //bg=createSprite(1000,800);
    //bg.addImage
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseimg1)
    mouse.scale=0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catLastImage",catImg3);
    cat.velocityX=0;
    cat.x=300;
    cat.scale=0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage",mouseimg3);
    mouse.scale=0.15;
    mouse.changeAnimation("mouseLastImage")
    }
   
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
  }


}
