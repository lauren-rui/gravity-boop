
    // function create ()
    // {
    //     this.add.image(400, 300, 'sky');

    //     var particles = this.add.particles('red');

    //     var emitter = particles.createEmitter({
    //         speed: 100,
    //         scale: { start: 1, end: 0 },
    //         blendMode: 'ADD'
    //     });

    //     var logo = this.physics.add.image(400, 100, 'logo');

    //     logo.setVelocity(100, 200);
    //     logo.setBounce(1, 1);
    //     logo.setCollideWorldBounds(true);

    //     emitter.startFollow(logo);
    // }

    var player;
    var platforms;
    var portal;
    var obsticle;
    var cursors;
    var jumpButton;

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
