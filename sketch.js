var gameState = 0
var playerCount,canvas,database,form,game,player,backgroundImage




function setup(){
  canvas = createCanvas(400,400)
  database = firebase.database();
 game = new Game() 
 game.getState()
 game.start()
 
  
  
}

function draw(){
  background();
  
    
    
  
}


