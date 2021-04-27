var starImg,backImg;
var star, starBody;
var fairy,fairyImg;
var fairyVoice;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

function preload()
{
	starImg = loadImage("star.png");
	backImg = loadImage("starNight.png");
		
    fairyImg=loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyVoice=loadSound("JoyMusic.mp3");
    
}

function setup() {
	createCanvas(800, 750);
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fairy=createSprite(400,500,20,20);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale=0.2;
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(backImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairyVoice.play();

  keyPressed();

  console.log(star.y);

  if(star.y>470&& starBody.position.y>470)
  {
	  Matter.Body.setStatic(starBody,true)
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyDown(RIGHT_ARROW))
	{
		fairy.x=fairy.x+2
	}

	if(keyDown(LEFT_ARROW))
	{
		fairy.x=fairy.x-2
	}
		
}
