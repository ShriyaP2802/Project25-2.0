
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(1090,660,20,100,{isStatic:true});
    box2 = new Dustbin(910,660,20,100,{isStatic:true});
    box3 = new Dustbin(1000, 680, 200, 20,{isStatic:true});
	ground = new Ground(600,height,1200,20);
	paper = new Paper(20,350,35);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:155,y:-155});
	}
}



