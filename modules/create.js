function create() {


    player = this.physics.add.sprite(150, 200, 'player');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(500);

    portal = this.physics.add.sprite(300, 400, 'portal');

    portal.setBounce(0);
    portal.setCollideWorldBounds(true);
    portal.body.setGravityY(0);

    obsticle= this.physics.add.sprite(250, 200, 'obsticle');

    obsticle.setBounce(0.2);
    obsticle.setCollideWorldBounds(true);
    obsticle.body.setGravityY(500);

    platforms = this.physics.add.staticGroup();

    platforms.create(150, 0, 'floor');
    platforms.create(150, 550, 'roof');
    platforms.create(-900, 100, 'leftWall');
    platforms.create(700, 100, 'rightWall');

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();
    // jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

//export{create};
