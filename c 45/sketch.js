var metoriod, monster, monster2, spaceship;
var metoriodAnimation, monsterAnimation, monster2Animation, spaceshipAnimation;

function preload()
{
metoriodAnimation = loadAnimation("images/metoriod.png");
monsterAnimation = loadAnimation("images/monster.png");
monster2Animation = loadAnimation("images/monster2.png");
spaceshipAnimation = loadAnimation("images/spaceship.png");

}

function setup()
{
    createCanvas(displayWidth,600)

    metoriodpero();

    spaceship1();
}

function draw()
{
   
    background("black");
    fill ("white");
    text(mouseX+" "+mouseY,100,100);
    drawSprites();
    metoriod.velocityY = 3;
    
    //spawnMetoriod()

    monster1()
    
   if(keyDown('LEFT_ARROW'))
   {
     spaceship.x = spaceship.x-10;
   }

   if(keyDown('RIGHT_ARROW'))
   {
     spaceship.x = spaceship.x+10;
   }

}
function metoriodpero()
{
    metoriod = createSprite(200,200);
    metoriod.addAnimation("metoriod",metoriodAnimation);
    metoriod.scale = 0.09;
   
}

function spawnMetoriod() {
   
    if (frameCount % 60 === 0) {
      var metoriod = createSprite(600,120,40,10);
      metoriod.y = Math.round(random(80,120));
      metoriod.addImage(metoriodImage);
      metoriod.scale = 0.5;
      metoriod.velocityX = -3;
      
       metoriod.lifetime = 200;
      
  

      metoriodsGroup.add(metoriod);
    }
    
  }
  
  function spaceship1()
  {
spaceship = createSprite(770,480);
spaceship.addAnimation("spaceship",spaceshipAnimation) 
spaceship.scale = 0.3;


  }

function monster1()
{

  if(frameCount%30===0)
  {
    

    monster=new Monster();


  }


}

//destroy the moster they exit the screen