
// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
  
    
      scene.add.existing(this);                             // add object to existing scene
      this.points = pointValue;                             // store point value
      this.moveSpeed = game.settings.spaceshipSpeed;        // pixels per frame

    }

    update(){
        //move spaceship left sinosoidal
        this.x -= this.moveSpeed;


        //wrap around from the left edge to the right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }
    //resets position
    reset(){
        this.x = game.config.width;
    }
}