var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package_options,stopper;
var box,box2,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 package_options={
		restitution:0.8,
	    isStatic:true
	}
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	stopper=createSprite(400,650,150,5);
	stopper.visible=false;

	stopper1=createSprite(320,620,5,80);
	stopper1.visible=false;

	stopper2=createSprite(480,620,5,80);
	stopper2.visible=false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,package_options);
	World.add(world, packageBody);
	

	//Create a Ground
    ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true} );
 	World.add(world, ground);
	box=new Box(320,620,15,80,PI)
	box1=new Box(400,650,150,15,PI/2)
	box2=new Box(480,620,15,80,PI)
	
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x
  packageSprite.y= packageBody.position.y
  packageSprite.collide(stopper);
  packageSprite.collide(stopper1);
  packageSprite.collide(stopper2);
  
  box.display();
  box1.display();
  box2.display();
  
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW){
	 Matter.Body.setStatic(packageBody,false)
 } 

    
  
}



