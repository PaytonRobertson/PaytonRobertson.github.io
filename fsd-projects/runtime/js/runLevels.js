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
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade (x, y, damage){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
          
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      sawBladeHitZone.rotationalVelocity = 30;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.addChild(obstacleImage);
    }
    
    function createEnemy(x, y, speed){
        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "red");
        redSquare.x = -25;
        redSquare.y = -25;
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
    

    function createReward(x, y, speed){
        var Reward = game.createGameItem("Reward", 25);
        var blueSquare = draw.rect(50, 50, "blue");
        blueSquare.x = -25;
        blueSquare.y = -25;
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

    function createMarker(x, y, speed){
        var Marker = game.createGameItem("Marker", 25);
        var greenSquare = draw.rect(50, 50, "green");
        greenSquare.x = -25;
        greenSquare.y = -25;
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
    createEnemy(400, groundY - 50, 10);
    createEnemy(1000, groundY - 50, 10);
    createReward(700, groundY - 125, 10 );
    createSawBlade(400, groundY - 110, 35);
    createSawBlade(600, groundY - 160, 35);
    createSawBlade(800, groundY - 170, 35);
    createMarker(1500, groundY - 75, -3);


    function startLevel() {
      // TODO 13 goes below here



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

