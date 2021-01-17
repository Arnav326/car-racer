class Game
{
    constructor()
    {

    }
    readGame()
    {
        var gameRef = db.ref('Gamestate');
        gameRef.on("value", function(data){
            gamestate = data.val();
        })
    }
    updateGame(state)
    {
        db.ref('/').update({
            Gamestate:state
        })
    }
    startGame()
    {
        if(gamestate == 0)
        {
            form = new Form();
            form.display();
            player = new Player();
            player.readCount();
        }
        car1 = createSprite(200, 200, 50, 50)
        car2 = createSprite(400, 200, 50, 50)
        car3 = createSprite(600, 200, 50, 50)
        car4 = createSprite(800, 200, 50, 50)
        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
        BigCar = [car1, car2, car3, car4]
       // BigCar[0]
    }
    play()
    {
        form.hide();
        Player.getplayerinfo();
        //AllPlayers = JSON --> {Player1:{Name,Distance},Player2:{Name,Distance} ......}
        if(AllPlayers !== undefined){
            background(0);
            image(trackImg,0, -displayHeight * 4, displayWidth, displayHeight * 4.5);
            var arrayindex = 0;
            var xpos  = displayWidth/4 + 50;
            var ypos = 0;
            for(var P in AllPlayers){
                 ypos = displayHeight/2 - AllPlayers[P].Distance  ;
               BigCar[arrayindex].x = xpos;
               BigCar[arrayindex].y = ypos;
               if(player.index == (arrayindex+1)){
                fill("blue");
                ellipse(xpos,ypos,80, 80);
                camera.position.x = displayWidth/2
                camera.position.y = BigCar[arrayindex].y

               }
            //P = Player1 ; AllPlayers[P].Name ,AllPlayers[P].Distance
     //       textSize(20);    
      //      text(AllPlayers[P].Name + ": " + AllPlayers[P].Distance, 150, ypos );
      //      ypos = ypos + 50;
                 arrayindex++;
                 xpos = xpos +200;
            }
            }     
            
            if(keyDown(UP_ARROW) && player.index !== null)
            {
                player.distance = player.distance + 50;
                player.updateDetails();
            }
            if(player.distance > 5000)
            {
                gamestate = 2;
            }
    }
    endGame()
    {
        textSize(20);
        textFont("Verdana");
        stroke("blue");
        strokeWeight(5);
        fill("red");
        text(player.name + " GAME OVER", displayWidth/2 - 100, -(displayHeight * 4 ) - 300);
        form.resetButton.show();
    }
     


}