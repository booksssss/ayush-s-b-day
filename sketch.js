var ground_image;
var PLAY=1
var END=0
var gameState = PLAY;
var dog, dog_running,dog_collided;
var star_Img;
var rock_Img;
var ground,invisibleGround;
var starsGroup;
var rocksGroup;
var score = 0;
var reset_Img, restart;
var gameover_Img;
var ayush, ayush_running, mom_obtacle, dad_obstacle, luckyImg;




function preload(){
dog_running = loadAnimation("corgi_1.png","corgi_2.png");
ayush_running = loadImage("ayush_weird.png")
mom_obtacle = loadImage("mom_erased.png")
dad_obstacle = loadImage("dad_erased.png")
star_Img = loadImage("star 3.png");
rock_Img = loadImage ("rock.png");
ground_image = loadImage("bg_2.png");
ground2_Img = loadImage("ayush_bg.jpeg");
reset_Img = loadImage("reset.png");
dog_collided = loadAnimation("corgi_3.png");
gameover_Img = loadImage("gameover1.png");
ayush_mad=loadImage("ayush_mad.png")
luckyImg = loadImage("luckayy.png")
//song = loadSound("Elektronomia - Sky High [NCS Release].mp3")
//dog_collided = loadImage("corgi_1.png");

}

function setup() {
 createCanvas(windowWidth,windowHeight);
 ground = createSprite(width/2,height-50,width,10);
 ground.scale = 1;
 ground.addImage("ground2",ground2_Img);
 ground.x = ground.width/2;
 //ground.velocityX = 6
 

invisibleGround = createSprite(width/2,height-30,width,10);
invisibleGround.visible = false;

//  dog = createSprite(200,height-100,20,50);
//  dog.addAnimation("running",dog_running);
//  dog.addAnimation("collided", dog_collided);
//  dog.scale = 0.4;

 ayush = createSprite(200,height-100,20,50);
 ayush.addImage("ayush",ayush_running);
 //ayush.addAnimation("collided", dog_collided);
 ayush.scale = 0.7;
 //dog.velocityX=1

//  starsGroup = createGroup();
//  rocksGroup = createGroup();

 momsGroup = createGroup();
 dadsGroup = createGroup();
 luckysGroup = createGroup();
 //dogsGroup.add(dog);

 restart = createSprite(width/2,height/2);
 restart.addImage(reset_Img);

 gameover = createSprite(width/2, height/2 +150);
 gameover.addImage(gameover_Img);
 gameover.scale = 0.2

 restart.visible = false;


}

function draw() {

 background("white");
 
 //dog.debug = true;
//  dog.setCollider ("circle",0.2,0.2);
//dog.setCollider("circle",0,0,140);
// if (gameState = PLAY) {
//     if(keyDown("space") && dog.y >= height - 155) { 
//         dog.velocityY = -14;
 
        
//        } 
       ayush.debug = false;
ayush.setCollider("circle",0,0,140);
if (gameState = PLAY) {
    if(keyDown("space") && ayush.y >= height - 155) { 
        ayush.velocityY = -14;
 
        
       } 
//dog.velocityY=dog.velocityY+0.8;
ayush.velocityY = ayush.velocityY+0.7

gameover.visible = false;

// dog.changeAnimation("running");
//ayush.changeImage("ayush_mad")

// dog.collide(invisibleGround);
ayush.collide(invisibleGround)
// spawn_Stars();
// spawn_Rocks()
spawn_Moms();
spawn_Dads();
spawn_Lucky();
//console.log(frameCount);

if (ground.x < width){
ground.x = ground.width/2;
 }

 ground.velocityX=-6

  //if (starsGroup.isTouching(dog)) {
//      score = score + 2
//      starsGroup.destroyEach()
//  }
if (luckysGroup.isTouching(ayush)) {
     score = score + 2
     luckysGroup.destroyEach()
 }

 if (dadsGroup.isTouching(ayush)) {
  score = score -2;
  dadsGroup.destroyEach();
}

if (momsGroup.isTouching(ayush)) {
  gameState = END;
}




//  if (rocksGroup.isTouching(dog)) {
  
//   gameState = END;
//   //rocksGroup.destroyEach()
// }
}

 if (gameState === END) {
  //dog.changeAnimation("collided",dog_collided);
  
  gameover.visible = true;
  restart.visible = true;
  
  ground.velocityX = 0;
  // dog.velocityY=0;
  
  // starsGroup.setVelocityXEach(0);
  // rocksGroup.setVelocityXEach(0);
  momsGroup.setVelocityXEach(0);
  dadsGroup.setVelocityXEach(0);
  luckysGroup.setVelocityXEach(0);
  

  // dog.changeAnimation("collided",dog_collided);

  // rocksGroup.setLifetimeEach(-1);
  // starsGroup.setLifetimeEach(-1);
  momsGroup.setLifetimeEach(-1);
  dadsGroup.setLifetimeEach(-1);
  luckysGroup.setLifetimeEach(-1);
  momsGroup.setvisibleEach = false;
  //rocksGroup.visible=false;

  //rocksGroup.destroyEach();

  if(mousePressedOver(restart)) {
    reset();
  }
    

  
}



    
      
 drawSprites();
 textSize(20);
  fill("black");
  text("Score: "+ score,150,30);
  text("Don't hit mom or dad.You can't win.",250,20)
  fill("#a84e32");
  text("HAPPY BIRTHDAY!",400,40);
  fill("black")
  text("When you hit lucky you get 2 points, when you hit mom, you lose, and when you hit dad, you lose 2 points.",210,60)
}

// function spawn_Stars() {
//     if(frameCount % 310 === 0) {
//       var star = createSprite(width/2,height-30,10,40);
//       star.addImage("star",star_Img);
//       star.scale = 0.1;
//       star.velocityX = -7.5
//       star.lifetime = 250;

//       starsGroup.add(star);
//     }
// }

function spawn_Lucky() {
      if(frameCount % 201 === 0) {
        var lucky = createSprite(width-10,height-70,10,40);
        lucky.addImage("lucky",luckyImg);
        lucky.scale = 0.5;
        lucky.velocityX = -7.5
        lucky.lifetime = 250;
        lucky.debug = false
        lucky.setCollider("circle",-90,0,40);
  
        luckysGroup.add(lucky);
      }
  }
  

function spawn_Moms() {
  if(frameCount % 117 === 0) {
    var mom = createSprite(width-10,height-60,10,40);
    mom.addImage("mom",mom_obtacle);
    mom.scale = 0.8;
    mom.velocityX = -7.5
    mom.lifetime = 250;
    mom.setCollider("circle",-20,5,40);
        
 
        
        
    mom.debug= false;

    momsGroup.add(mom);
  }}


function spawn_Dads() {
  if(frameCount % 554 === 0) {
    var dad = createSprite(width-10,height-30,10,40);
    dad.addImage("dad",dad_obstacle);
    dad.scale = 0.76;
    dad.velocityX = -7.5
    dad.lifetime = 250;
    dad.setCollider("circle",100,20,40);
    dad.debug = false;
    dadsGroup.add(dad);
  }

  
}

// function spawn_Rocks() {
//   if(frameCount % 150 === 0) {
//     var rock = createSprite(width,height-30,10,40);
//     rock.addImage("rock",rock_Img);
//     rock.scale = 0.1;
//     rock.velocityX = -7.5;
//     rock.lifetime = 250;

//     rocksGroup.add(rock);

//     rock.depth = dog.depth;
//     dog.depth = dog.depth + 1;


  



//   }
// }

function reset() {
  gameState = PLAY;
  restart.visible = false;
  gameover.visible = false;
  
  // rocksGroup.destroyEach();
  // starsGroup.destroyEach();

  dadsGroup.destroyEach();
  momsGroup.destroyEach();
  luckysGroup.destroyEach();
  

  ground.x = ground.width/2;
  ground.velocityX = 6;

  score=0;
  
}
