var db;
var gamestate = 0;
var playerCount = 0;
var form,player,game;
var AllPlayers;
var BigCar;
var car1, car2, car3, car4;
var track;

function preload()
{
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    trackImg = loadImage("images/track.jpg")
}

function setup()
{
    createCanvas(displayWidth,displayHeight);
    db = firebase.database();
    game = new Game();
    game.readGame();
    game.startGame();
    

}

function draw()
{
    
     if(playerCount == 4)
     {
         game.updateGame(1);
     }
     if(gamestate == 1)
     {
         clear();
         game.play();
         drawSprites();
     }
     if(gamestate == 2)
     {
        game.endGame();
     }
}
