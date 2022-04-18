// SUBMISSION COMMENTS
//
// Michelle Kim
// Rocket Patrol Mod - Pollen Patrol
// 4/18/22
//
// took 12 hours over 2 days
//
// the Player starts out with 50 points, hitting a bee will dock 10 points
// and hitting the fly will add 50 points, no effect on timer
//
// Point breakdown:                 Made new music/sound                 +5
//                                  Created new scrolling background     +5
//                                  Display time left                   +10
//                                  Create new title screen             +10
//                                  Parallax scrolling                  +10
//                                  New spaceship type                  +20
//                                  New Artwork for assets              +20
//                                  Mouse control                       +20
//                                                              total:  100

// Note: sometimes the rocket will stick to the x=0 pos, in that case
//       please just reload the browser, it should work fine



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

let game = new Phaser.Game(config);

//load music
let music;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;


let pointer;