const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, ball;
var binImg, bin;

function preload(){
	binImg = loadImage("Images/dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(600, 600);
	rectMode(CENTER);

	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground();
	crumpledPaper = new Paper();

	bin = createSprite(460, 535, 230, 10);
	bin.addImage("dustbingreenImg");
	bin.scale = 0.45;

	binPart1 = new Dustbin(460, 505, 10, 120);
	binPart2 = new Dustbin(430, 525, 130, 10);
	binPart3 = new Dustbin(460, 505, 10, 120);
}


function draw() {
	if (gameState === "start") {
		background("white");
	
		textSize(20);
		fill("black")
		text("This is small game that will teach you the importance of throwing away your trash. \n");
		ground.display();
		crumpledPaper.display();
		binPart1.display();
		binPart2.display();
		binPart3.display();

		drawSprites();

	}
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position,{x:74, y:-75})
	}
}
