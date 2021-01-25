class Player {
    constructor(){

    }
    getCount(){
        var PlayerCountRef = database.ref('playerCount')
        PlayerCountRef.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
    update(name){
        var playerindex = "player"+ playerCount
        database.ref(playerindex).set({
            name: name 
        })
    }
}