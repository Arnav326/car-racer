class Player
{
    constructor(){
        this.name = null;
        this.index =  null;
        this.distance = 0;
    }
    readCount()
    {
        var gameRef = db.ref('Player_Count');
        gameRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    updateCount(count)
    {
        db.ref('/').update({
            Player_Count:count
        })
    }

    updateDetails()
    {
        var index = "Player/player" + this.index 
        db.ref(index).set({
           Name : this.name,
           Distance : this.distance
        })
    }
//calling at class level... we display all player details to all.
    static getplayerinfo()
    {
        var playerRef = db.ref('Player');
        playerRef.on("value", function(data){

            AllPlayers = data.val();
        })
        
    }
}


