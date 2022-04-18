// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
    
      scene.add.existing(this);                             // add object to existing scene
      this.isFiring = false;                                // track rocket's firing status
      this.moveSpeed = 2;                                   // pixels per frame
      this.sfxRocket = scene.sound.add('shoot');       // add rocket sfx
    }

    update(){
        
        if(!this.isFiring){
            if(this.x >= borderUISize + this.width){
                this.x = pointer.worldX;
            }
        }

        // fire button
        // fire button
        if (pointer.isDown && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize*3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize*3 + borderPadding){
            this.reset();
        }

    }
    //resets rocket to ground
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}