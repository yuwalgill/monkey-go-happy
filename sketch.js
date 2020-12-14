var monkey ,monkeyA,ground,groundA,stone,stoneA,iground,banana,bananaA,bananasgroup,stonesgroup,monkeyE


function preload(){
  monkeyA=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png" ,"Monkey_05.png" ,"Monkey_06.png", "Monkey_07.png" ,"Monkey_08.png", "Monkey_09.png" ,"Monkey_10.png" )

  groundA= loadImage("jungle.jpg");

  stoneA=loadImage("stone.png")

  bananaA=loadImage("banana.png")
}
function setup() {
  createCanvas(500,200);
monkey= createSprite(50,165,20,20)
monkey.addAnimation("running",monkeyA)
monkey.scale=0.1
ground=createSprite(250,5,600,15)
ground.addImage("ground",groundA)
ground.scale=1
  ground.depth=monkey.depth
  monkey.depth=monkey.depth+1
iground=createSprite(250,195,600,15)
stonesgroup=new Group();
  bananasgroup=new Group();
 
  iground.visible=false
}

function draw() {
  background("black");
  if (ground.x < 0){
    ground.x = ground.width/5;
  }
  if(keyDown("space")&&monkey.y>108) {  
    monkey.velocityY = -10;
   
  
  }
  if(monkey.isTouching(bananasgroup)){
    bananasgroup.destroyEach()
    monkey.scale=monkey.scale+0.02
  }
  if(monkey.isTouching(stonesgroup)){
    stonesgroup.destroyEach()
   
    monkey.scale=monkey.scale-0.02
  
  }

  monkey.velocityY = monkey.velocityY + 1
  monkey.collide(iground)
  console.log(monkey.y)
  ground.velocityX=-7
stones()
spawnbanana()
  drawSprites();
}
function stones(){
  if (frameCount % 100 === 0) {
  
    stone=createSprite(500,170,20,20)
  stone.velocityX=-6
    stone.addImage(stoneA)
    stone.scale=0.15
stonesgroup.add(stone)
  }
}
function spawnbanana(){
  if (frameCount % 100 === 0) {
 banana=createSprite(500,100,20,20) 
  banana.velocityX=-4
banana.addImage(bananaA)
  banana.scale=0.05
  bananasgroup.add(banana)
  }
}
