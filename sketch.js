
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,300,30)
	bob1=new Bob(400,400,30)
	//rope1=new Rope(bob1.body,{x:400,y:100})
	rope1=new Rope(bob1.body,roof.body,0,0)
	
	bob2=new Bob(340,400,30)
	rope2=new Rope(bob2.body,{x:700,y:50})

	bob3=new Bob(280,400,30)
	rope3=new Rope(bob3.body,{x:200,y:150})

	bob4=new Bob(460,400,30)
	rope4=new Rope(bob4.body,{x:700,y:50})

	bob5=new Bob(500,400,30)
	rope5=new Rope(bob4.body,{x:700,y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  roof.display()
  bob1.display()
  rope1.display()

  bob2.display()
  rope2.display()

   bob3.display()
  rope3.display()

  bob4.display()
  rope4.display()

  bob5.display()
  rope5.display()



  drawSprites();
 
}



