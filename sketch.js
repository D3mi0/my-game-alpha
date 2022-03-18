var shipstage = 1
var play
var end = 0
var gamestate = play



function preload(){
spaceImg = loadImage("space.jpg")
sickbeats = loadSound("doom.mp3")
//loading ship stages
shipstage1Img = loadImage("stage 1.png")
shipstage2Img = loadImage("stage 2.png")
shipstage3Img = loadImage ("stage 3.png")
//loading enemies
enemy1 = loadImage("enemy1.png")
enemy2 = loadImage("enemy2.png")
enemy3 = loadImage("enemy3.png")
}

function setup() {
 sickbeats.loop()
 createCanvas(windowWidth, windowHeight)
 //moving backround
 space = createSprite(800, 260)
 space.addImage(spaceImg, "space.jpg")
 space.scale=1
 space.velocityX = -45

 //spaceship creation
 ship = createSprite(50, 300)
 ship.addImage(shipstage1Img, "stage 1.png")
 ship.scale=2
 ship.rotation=90
 //creating enemy groups
 enemiesGroup = createGroup()
 bulletGroup = createGroup()
 
}

function draw() {
 background(255)
 
 if (gamestate === play){

 if (space.x < 550){
 space.x = space.width/2
 }
  
 ship.y=World.mouseY
 
 if (bulletGroup.isTouching(ship)){
    ship.destroy()
    gamestate = end
    textSize(60)
    text("GAME OVER!", 200, 200)
    fill("blue")
        
    }


 spawnEnemies()
}

else if (gamestate === end){
    space.velocityX = 0
   
 }

drawSprites()
}

function spawnEnemies(){
 //spawning enemies
 if (frameCount % 30 === 0){
   enemy = createSprite(950, 200, 30, 30)
  //spawn random enemies
  var rand = Math.round(random(1, 3))
  switch(rand){
   case 1:enemy.addImage(enemy1)
           break
    case 2:enemy.addImage(enemy2)
           break
    case 3:enemy.addImage(enemy3)
           break    
    default: break
  }
  //add each obstacle to a group
  enemiesGroup.add(enemy)
  enemy.scale = 0.3
  enemy.lifetime = 30
  enemy.y = ship.y
  enemy.rotation=270
  

  bullet=createSprite(enemy.x, enemy.y, 20, 20)
  bullet.velocityX = -40
  bullet.shapeColor = "green"
  bulletGroup.add(bullet)
    
  

 }

 

}

