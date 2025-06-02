$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 650, 200, 20);
createPlatform(700, 200, 300, 20);
createPlatform(700, 550, 150, 20);
createPlatform(1000, 500, 100, 20);
createPlatform(600, 400, 200, 20);
createPlatform(500, 300, 100, 20);
createPlatform(1200, 250, 100, 20);
createPlatform(100, 550, 100, 20);
createPlatform(1000, 120, 10, 20);
createPlatform(100, 100, 242, 20);
createPlatform(200, 400, 100, 20);


    // TODO 3 - Create Collectables
createCollectable("witherSkull", 300, 560, 0.5);
createCollectable("witherSkull", 650, 350, 0.5);
createCollectable("soulSand", 750, 150, 0.5);
createCollectable("soulSand", 1050, 447, 0.5);
createCollectable("witherSkull", 120, 500, 0.5);


    
    // TODO 4 - Create Cannons
createCannon("left", 550, 2000);
createCannon("bottom", 710, 2500);
createCannon("left", 220, 1995);
createCannon("bottom", 1050, 2053);
createCannon("right", 150, 1500);    
   
//////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
