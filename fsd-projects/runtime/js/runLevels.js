var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade (x, y, damage, image){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
          
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap(image);
      obstacleImage.scaleX = .15;
      obstacleImage.scaleY = .15;
      obstacleImage.x = -40;
      obstacleImage.y = -40;
      sawBladeHitZone.addChild(obstacleImage);
    }
    
    function createEnemy(x, y, speed, image, offsetX, offsetY, scale){
        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.bitmap(image);
        redSquare.scaleX = scale
        redSquare.scaleY = scale
        redSquare.x = offsetX;
        redSquare.y = offsetY;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = - 3;
        enemy.onPlayerCollision = function () {
          game.changeIntegrity(-10)
        };
        enemy.onProjectileCollision = function(){
          game.increaseScore(100);
          enemy.fadeOut();
        };
    }
    

    function createReward(x, y, speed, image){
        var Reward = game.createGameItem("Reward", 25);
        var blueSquare = draw.bitmap(image);
        blueSquare.scaleX = .27
        blueSquare.scaleY = .27
        blueSquare.x = -50;
        blueSquare.y = -50;
        Reward.addChild(blueSquare);
        Reward.x = x;
        Reward.y = y;
        game.addGameItem(Reward);
        Reward.velocityX = - 3;
        Reward.onPlayerCollision = function () {
          game.changeIntegrity(15)
          Reward.fadeOut();
        };
    }

    function createMarker(x, y, speed, image){
        var Marker = game.createGameItem("Marker", 25);
        var greenSquare = draw.bitmap(image);
        greenSquare.scaleX = .45
        greenSquare.scaleY = .45
        greenSquare.x = -55;
        greenSquare.y = -55;
        Marker.addChild(greenSquare);
        Marker.x = x;
        Marker.y = y;
        game.addGameItem(Marker);
        Marker.velocityX = - 3;
        Marker.onPlayerCollision = function () {
          game.changeIntegrity(15)
          Marker.fadeOut();
          startLevel();
        };
    }

    

  // function calls 
    


    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; // fetches current lever of array
      var levelObjects = level.gameItems;
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "sawblade"){
          createSawBlade(element.x, element.y, element.damage, element.image)
        }
        
        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.speed, element.image, element.offsetX, element.offsetY, element.scale)
        }

         if(element.type === "reward"){
          createReward(element.x, element.y, element.speed, element.image)
        }

         if(element.type === "marker"){
          createMarker(element.x, element.y, element.speed, element.image)
        }
      }
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
