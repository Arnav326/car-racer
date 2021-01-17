class Form
{
    constructor()
    {
        this.playerName = createInput('Put your name here plz');
        this.button = createButton('play or else');
        this.welcome = createElement('h3');
        this.resetButton = createButton('Want to be lazy, Click Here!')
    }
    display()
    {
        //textFont("Georgia")
        var title = createElement('h2');
        title.html("car RACING game");
        title.position(displayWidth/2, 70);
        
        this.playerName.position(displayWidth/2, displayHeight/2);
         
        this.button.position(displayWidth/2, displayHeight-150);

        this.resetButton.position(displayWidth/4, 100);

        this.resetButton.mousePressed(() =>
        {
            player.updateCount(0);
            game.updateGame(0);
            location.reload();
        })
//arrow function 
        this.button.mousePressed(() =>
        {
            this.button.hide();
            this.playerName.hide();
           
            this.welcome.html("Hi, you are about to play a game")
            this.welcome.position(displayWidth/2, displayHeight/2);
                       
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.name = this.playerName.value();
            player.updateDetails();
            
        })
    }
    hide()
    {
        this.button.hide();
        this.playerName.hide();
        this.welcome.hide();    
        this.resetButton.hide();
    }
}