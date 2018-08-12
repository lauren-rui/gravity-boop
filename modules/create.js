function create() {

    player = this.physics.add.sprite(150, 200, 'player');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(500);

    var v = (player.x < 400) ? Phaser.Math.Between(100, 700) : Phaser.Math.Between(0, 400);
    var b = (player.x < 400) ? Phaser.Math.Between(200, 600) : Phaser.Math.Between(100, 100);


    portal = this.physics.add.sprite(v, b, 'portal');

    portal.setBounce(0);
    portal.body.setGravityY(0);
    portal.body.setGravityX(0);
    // make sure this gets reset each time the player changes the gravity
    var x = (player.x < 400) ? Phaser.Math.Between(200, 700) : Phaser.Math.Between(0, 400);

    obsticle = this.physics.add.sprite(x, 200, 'obsticle');

    obsticle.setBounce(0.2);
    obsticle.setCollideWorldBounds(true);
    obsticle.body.setGravityY(500);
    //var x = (player.x < 400) ? Phaser.Math.Between(200, 400) : Phaser.Math.Between(0, 400);

    //var obsticle = obsticle.create(x, 1, 'obsticle');
    //obsticle.setBounce(0.2);
    //obsticle.setCollideWorldBounds(true);
    //obsticle.setGravityY(500);

    

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 15, 'roof');
    platforms.create(400, 586, 'floor');
    platforms.create(26, 300, 'leftWall');
    platforms.create(775, 300, 'rightWall');

    this.physics.add.collider(platforms, player);
    this.physics.add.collider(obsticle, platforms);
    this.physics.add.collider(platforms, obsticle);
    this.physics.add.collider(platforms, player);



function victory (player, portal) 
        {
            portal.disableBody(true, true);
            this.physics.pause();
            platforms.create(250, 250, 'win');
        }

    this.physics.add.overlap(player, portal, victory, null, this);

function death (player, obsticle)
    {
        this.physics.pause();
        platforms.create(250, 250, 'death');
    }

this.physics.add.overlap(player, obsticle, death, null, this);

    cursors = this.input.keyboard.createCursorKeys();
    jumpButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    gravityUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    gravityDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    gravityLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    gravityRight =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

}
    // jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
