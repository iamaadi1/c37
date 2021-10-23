var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;

function setup(){
database=firebase.database();
canvas = createCanvas(windowWidth,windowHeight);

game = new Game()
game.start();

}

function preload(){
backgroundImage=loadImage("assets/background.png");


}

function draw(){

background(backgroundImage);

if(playerCount===2){game.update(1)


}
if(gameState===1){game.play()}
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }