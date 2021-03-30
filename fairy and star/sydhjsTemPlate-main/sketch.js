var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyAni, fairy;
var voice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
	fairyAni = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	voice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    voice.loop();
	//create fairy sprite and add animation for fairy
    
	fairy = createSprite(45,500);
    fairy.addAnimation("fly",fairyAni);
    fairy.scale = 0.2;

	star = createSprite(710,30);
	star.addImage(starImg);
	star.scale = 0.05;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    
	
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y > 170 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x +30;
	}

	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x -30;
	}
}
