
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    var bobDiameter=40

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	paperObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	paperObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	paperObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	paperObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	paperObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	groundObject=new Roof(width/2,height/4,600,20);
	rope1=new rope(paperObject1.body,groundObject.body,-bobDiameter*2, 0)
	rope2=new rope(paperObject2.body,groundObject.body,-bobDiameter*1, 0)
	rope3=new rope(paperObject3.body,groundObject.body,0, 0)
	rope4=new rope(paperObject4.body,groundObject.body,bobDiameter*1, 0)
	rope5=new rope(paperObject5.body,groundObject.body,bobDiameter*2, 0)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	}) 
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paperObject1.display();
  paperObject2.display();
  paperObject3.display();
  paperObject4.display();
  paperObject5.display();
  groundObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject1.body,paperObject1.body.position,{x:-50,y:-45});

	}
}