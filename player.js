class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
    }

    getPlayerCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updatePlayerCount(count){
        database.ref("/").update({
           playerCount:count 
        })
    }

}