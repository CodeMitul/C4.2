var canvas;
var spaceship1, spaceship2;
var alien, alienImg;
var spaceship1Img, spaceship2Img;
var life, lifeImg;
var bgImg;
var gameState = "PLAY" , form , game, player, playerCount, gameState, spaceship=[];

function preload(){
    bgImg = loadImage("assets/bg.jpeg")
    spaceship1Img = loadImage("assets/spaceship1.png");
    spaceship2Img = loadImage("assets/spaceship2.png");
    alienImg = loadImage("assets/alien.png");
    lifeImg = loadImage("assets/life.png");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	database = firebase.database();

	//create the game object 
	game = new Game();
	game.start();
}


function draw(){
  background(bgImg)
 
  //switch the game state 
  
  
    
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}