class Fly extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);                             // add object to existing scene
        this.points = pointValue;                             // store point value
        this.moveSpeed = game.settings.spaceshipSpeed + 2;    // pixels per frame
        
    }
    update(){
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