function create() {

    player = this.physics.add.sprite(150, 200, 'player');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(500);

    portal = this.physics.add.sprite(300, 400, 'portal');

    portal.setBounce(0);
    portal.body.setGravityY(-200);
    portal.body.setGravityX(0);
    // make sure this gets reset each time the player changes the gravity
    obsticle = this.physics.add.sprite(250, 200, 'obsticle');

    obsticle.setBounce(0.2);
    obsticle.setCollideWorldBounds(true);
    obsticle.body.setGravityY(500);

    platforms = this.physics.add.staticGroup();

    platforms.create(450, 10, 'roof');
    platforms.create(450, 586, 'floor');
    platforms.create(26, 100, 'rightWall');
    platforms.create(700, 100, 'leftWall');

    this.physics.add.collider(player, obsticle);

    cursors = this.input.keyboard.createCursorKeys();
    jumpButton = this.input.keyboard.on(Phaser.Keyboard.SPACEBAR);

}
    // jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
