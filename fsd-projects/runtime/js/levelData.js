var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 110, damage: 35, image: "img/fire.png"}, // fire
          { type: "enemy", x: 500, y: groundY - 50, speed: -3, image: "img/alien.cat.png", offsetX: -50, offsetY: -25, scale: 0.5}, // cat
          { type: "enemy", x: 1100, y: groundY - 50, speed: -2, image: "img/alien.cat2.png", offsetX: -50, offsetY: -25, scale: 0.5}, // cat
          { type: "enemy", x: 1350, y: groundY - 50, speed: -2, image: "img/alien.cat.png", offsetX: -50, offsetY: -25, scale: 0.5}, // cat
          { type: "reward", x: 700, y: groundY - 120, speed: 10, image: "img/star2.png"}, // heart
          { type: "marker", x: 1500, y: groundY - 75, speed: -3, image: "img/portal.png"}, // portal
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
         { type: "sawblade", x: 150, y: groundY - 130, damage: 35, image: "img/fire.png"}, // fire
         { type: "sawblade", x: 500, y: groundY - 120, damage: 35, image: "img/fire.png"}, // fire
         { type: "enemy", x: 700, y: groundY - 50, speed: -3, image: "img/alien.cat.png", offsetX: -70, offsetY: -25, scale: 0.5}, // cat
         { type: "enemy", x: 500, y: groundY - 50, speed: -2, image: "img/alien.cat2.png", offsetX: -50, offsetY: -25, scale: 0.5}, // cat
         { type: "reward", x: 300, y: groundY - 120, speed: 10, image: "img/heart.png"}, // heart
         { type: "marker", x: 1400, y: groundY - 75, speed: -3, image: "img/portal.png"}, // portal
        ],
      },

       {
        name: "Level 3",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 570, y: groundY - 130, damage: 35, image: "img/fire.png"}, // fire
          { type: "sawblade", x: 190, y: groundY - 190, damage: 35, image: "img/fire.png"}, // fire
          { type: "sawblade", x: 1000, y: groundY - 150, damage: 35, image: "img/fire.png"}, // fire
          { type: "enemy", x: 500, y: groundY - 50, speed: -3, image: "img/alien.cat2.png", offsetX: -90, offsetY: -25, scale: 0.5}, // cat
          { type: "enemy", x: 1100, y: groundY - 50, speed: -2, image: "img/alien.cat.png", offsetX: -90, offsetY: -25, scale: 0.5}, // cat
          { type: "enemy", x: 800, y: groundY - 50, speed: -2, image: "img/alien.cat.png", offsetX: -90, offsetY: -25, scale: 0.5}, // cat
          { type: "reward", x: 450, y: groundY - 120, speed: 10, image: "img/star2.png"}, // heart
          { type: "reward", x: 320, y: groundY - 180, speed: 10, image: "img/heart.png"}, // heart
          { type: "marker", x: 2800, y: groundY - 75, speed: -3, image: "img/portal.png"}, //portal
          { type: "enemy", x: 2100, y: groundY - 50, speed: -2, image: "img/alien.cat2.png", offsetX: -50, offsetY: -25, scale: 0.5}, // cat
          { type: "enemy", x: 2450, y: groundY - 50, speed: -2, image: "img/alien.cat2.png", offsetX: -50, offsetY: -25, scale: 0.5}, // cat
        ],
      },

    
      
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
