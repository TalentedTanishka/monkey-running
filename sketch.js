var monkey , monkey_image , obs_image, fruit_image , BananaGroup , ObstaclesGroup , bg , bg_image , Ground , Ground_image , InvisibleGround , score = 0  , PLAY = 1 , END = 0 , playState = PLAY , restart , restart_image ,  gameover , gameover_image ;


function preload(){
  
  monkey_image = loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png",
"Monkey_10.png");
  
  bg_image = loadImage("jungle.jpg");
  Ground_image = loadImage("ground.jpg");
  
  obs_image = loadImage("stone.png");
  fruit_image = loadImage("Banana.png");
  
  restart_image = loadImage("restart.png"); 
  gameover_image = loadImage("gameOver.png");
  
}


function setup() {
  createCanvas(600,300);
  
  bg = createSprite(300,100);
  bg.addImage(bg_image);
  bg.scale = 2;
  
  monkey = createSprite(100,240);
  monkey.addAnimation("walk" , monkey_image);
  monkey.scale = 0.1;
  
  Ground = createSprite(300,275,600,10);
  Ground.shapeColor = "brown";
  
  BananaGroup = new Group(); 
ObstaclesGroup = new Group(); 
 
  InvisibleGround = createSprite(300,275,600,10);
  InvisibleGround.visible = false;
  
  //global scope  
restart = createSprite(300,150);
restart.addImage(restart_image);
restart.scale = 0.5;
restart.visible = false;

//global scope  
gameover = createSprite(300,100);
gameover.addImage(gameover_image);
gameover.visible = false;
  
  textSize(30);
  fill("white");

}
  

function draw(){
 background(185);
  if(playState == PLAY)
         {
//set gravity
if(keyDown("space") && monkey.y > 150 )
{
monkey.velocityY = -10;
}
monkey.velocityY = monkey.velocityY + 0.8;
           
           bg.velocityX = -2;
           
        //when the player touches the obstacle
         if(ObstaclesGroup.isTouching(monkey))
        {
           playState = END;
           monkey.scale = 0.1;
   
        }
        
//when the player touches the banana
if(BananaGroup.isTouching(monkey))
{
BananaGroup.destroyEach();
  score = score + 2
  
  switch(score)
  {
      case 5 : monkey.scale = 0.2;
      break;
      
      case 10 : monkey.scale = 0.12;
      break;
      
      case 15 : monkey.scale = 0.14;
      break;
      
      case 20 : monkey.scale = 0.15;
      break;
      
      case 25 : monkey.scale = 0.16;
      break;
      
      case 30 : monkey.scale = 0.17;
      break;
      
      case 35 : monkey.scale = 0.18;
      break;
      
      case 40 : monkey.scale = 0.19;
      break;
      
      case 45 : monkey.scale = 0.22;
      break;
      
      case 50 : monkey.scale = 0.23;
      break;
      
      case 55 : monkey.scale = 0.24;
      break;
      
      case 60 : monkey.scale = 0.25;
      break;
      case 65 : monkey.scale = 0.26;
      break;
      
      case 70 : monkey.scale = 0.27;
      break;
      
      case 75 : monkey.scale = 0.28;
      break;
      
      case 80: monkey.scale = 0.29;
      break;
      
      case 85: monkey.scale = 0.32;
      break;
      
      case 90 : monkey.scale = 0.33;
      break;
      
      case 95 : monkey.scale = 0.34;
      break;
      
   
  }
  }
  
                      
obstacle();
spawnfruit();
  
           
  
        
 }
 
 else if(playState == END)
 {
   monkey.x = 100;
   monkey.y = 240;
   bg.velocityX = 0;
  ObstaclesGroup.setVelocityXEach(0);
  BananaGroup.setVelocityXEach(0);
  ObstaclesGroup.setLifetimeEach(-1);
  BananaGroup.setLifetimeEach(-1);
 restart.visible = true;
   gameover.visible = true;
 
 }
  
  if(bg.x<0)
  {
    bg.x = bg.width/2;
    
  }
  
  
  monkey.collide(InvisibleGround);
  
   if(mousePressedOver(restart))
 {
   reset();
 }
  
  obstacle();
spawnfruit();
  
  
  
  
  drawSprites();
  text("Score: "+ score, 300,50);
}

function reset()
{
  playState = PLAY;
  
 ObstaclesGroup.destroyEach();
BananaGroup.destroyEach();
 restart.visible = false;
   gameover.visible = false;
   score = 0;
  monkey.scale = 0.1;
  
}
  
function obstacle()
    {
    if(frameCount % 300 == 0)
    {
     obs = createSprite(600,250,20,20);
      obs.addImage(obs_image);
    obs.scale = 0.12;
        obs.lifetime = 300;
      obs.velocityX = -(6 + score*3/100) ;
      ObstaclesGroup.add(obs);
                }
              }

function spawnfruit()
{
  if(frameCount % 80 == 0)
  {
   fruit = createSprite(600,150,20,20);
  fruit.addImage(fruit_image);
  fruit.scale = 0.05;
  fruit.lifetime = 300;
    fruit.velocityX = -(6 + score*3/100) ;
  BananaGroup.add(fruit);
  }
}