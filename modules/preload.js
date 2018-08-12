function preload() {

    // this.stage.backgroundColor = '#85b5e1';

    this.load.baseURL = 'assets/';
    this.load.crossOrigin = 'anonymous';

    this.load.image('player', 'player.png');
    this.load.image('floor', 'Floor.png');
    this.load.image('leftWall', 'Leftwall.png' );
    this.load.image('rightWall', 'Rightwall.png');
    this.load.image('roof','Roof.png');
    this.load.image('portal','Portal.png');
    this.load.image('obsticle','obsticle.png');

}

// function preload ()
// {
//     this.load.setBaseURL('http://labs.phaser.io');

//     this.load.image('sky', 'assets/skies/space3.png');
//     this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//     this.load.image('red', 'assets/particles/red.png');
// }
