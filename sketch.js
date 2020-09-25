var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottomWall,leftWall,rightWall;
var bottomWallSprite,leftWallSprite,rightWallSprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bottomWallSprite = createSprite(width/2,height-50,200,20);
	bottomWallSprite.shapeColor = "red";

	leftWallSprite = createSprite(width/2-100,height-90,20,100);
	leftWallSprite.shapeColor = "red";

	rightWallSprite = createSprite(width/2+100,height-90,20,100);
	rightWallSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create Red Box
	bottomWall = Bodies.rectangle(width/2,height-50,200,20,{isStatic:true});   
	World.add(world,bottomWall); 
	
	leftWall = Bodies.rectangle(width/2-100,height-90,20,100,{isStatic:true});   
	World.add(world,leftWall); 

	rightWall = Bodies.rectangle(width/2+100,height-90,20,100,{isStatic:true});   
	World.add(world,rightWall); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
	} 
	else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
	}
 	else if (keyCode === DOWN_ARROW) {
		Body.setStatic(packageBody,false);
  	}
}



