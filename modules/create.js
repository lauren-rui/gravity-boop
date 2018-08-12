function create() {

    player = this.physics.add.sprite(150, 200, 'player');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(500);

    portal = this.physics.add.sprite(300, 400, 'portal');

    portal.setBounce(0);
    portal.body.setGravityY(0);
    portal.body.setGravityX(0);
    // make sure this gets reset each time the player changes the gravity
    obsticle = this.physics.add.sprite(250, 200, 'obsticle');

    obsticle.setBounce(0.2);
    obsticle.setCollideWorldBounds(true);
    obsticle.body.setGravityY(500);

    platforms = this.physics.add.staticGroup();

    platforms.create(450, 15, 'roof');
    platforms.create(450, 586, 'floor');
    platforms.create(26, 300, 'leftWall');
    platforms.create(775, 300, 'rightWall');

    this.physics.add.collider(platforms, player);
    this.physics.add.collider(obsticle, player);
    this.physics.add.collider(obsticle, platforms);

    cursors = this.input.keyboard.createCursorKeys();
    jumpButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    gravityUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    gravityDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    gravityLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    gravityRight =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

}
    // jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
