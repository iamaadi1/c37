class Game {
    constructor() {}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

car1=createSprite(width/2-50,height-100,100,100)
car2=createSprite(width/2+100,height-100,100,100)
cars=[car1,car2];


    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
    }
  
    play() {this.handleElements()
    Player.getPlayersInfo()
    if(allPlayers !== undifined){
drawSprites()

    }
    
    }
    
  }