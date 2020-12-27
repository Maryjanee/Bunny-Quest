
import Phaser from 'phaser';
import Carrot from '../Entities/Carrot';


export default class GameScene extends Phaser.Scene {
  constructor() {
    // carrots;
    // platforms;

    super('Game');
    this.noOfJumps = 0;
    this.gravity = 500;
  }

  init() {
    this.carrotsCollected = 0;
  }


  preload() {
    this.load.image('background', 'src/assets/bg_layer1.png');
    this.load.image('platform', 'src/assets/ground_cake.png');
    this.load.image('bunny', 'src/assets/bunny2_ready.png');
    this.load.image('carrot', 'src/assets/carrot.png');
  }

  create() {
    this.add.image(240, 320, 'background').setScrollFactor(1, 0);
    this.platforms = this.physics.add.staticGroup();
    this.cursors = this.input.keyboard.createCursorKeys();
    for (let i = 0; i < 5; i += 1) {
      const x = Phaser.Math.Between(80, 600);
      const y = 150 * i;
      const platform = this.platforms.create(x, y, 'platform');
      platform.scale = 0.5;


      const { body } = platform;
      body.updateFromGameObject();
    }
    //  platforms.setAll('body.allowGravity', false);
    //  platforms.setAll('body.immovable', true);
    //  platforms.setAll('body.velocity.x', 100);
    this.player = this.physics.add.sprite(240, 320, 'bunny').setScale(0.3);
    this.physics.add.collider(this.platforms, this.player);
    this.player.body.checkCollision.up = false;
    this.player.body.checkCollision.left = false;
    this.player.body.checkCollision.right = false;

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setDeadzone(this.scale.width * 1.5);

    this.carrots = this.physics.add.group({
      classType: Carrot,
    });

    this.carrots.get(240, 320, 'carrot');

    this.physics.add.collider(this.platforms, this.carrots);
    this.physics.add.overlap(this.player, this.carrots, this.handleCollectCarrot, false, this);

    this.carrotsCollectedText = this.add.text(240, 10, `Carrots: ${this.carrotsCollected}`, this.style).setScrollFactor(0).setOrigin(0.5, 0);
  }

  update(t, dt) {
    this.platforms.children.iterate(child => {
      const platform = child;
      const { scrollY } = this.cameras.main;
      if (platform.y >= scrollY + 700) {
        platform.y = scrollY - Phaser.Math.Between(50, 100);

        platform.body.updateFromGameObject();
        this.addCarrotAbove(platform);
      }
    });

    const { left, right, space } = this.cursors;
    const spaceKeyPressed = Phaser.Input.Keyboard.JustDown(space);

    const touchingDown = this.player.body.touching.down;

    if (left.isDown) {
      this.player.setVelocityX(-100);
      this.player.setFlipX(true);
    } else if (right.isDown) {
      this.player.setVelocityX(100);
      this.player.setFlipX(false);
    } else {
      this.player.setVelocityX(0);
    }
    if ((spaceKeyPressed) && (touchingDown || this.noOfJumps < 1)) {
      this.player.setVelocityY(-200 * 1.8);
      this.noOfJumps++;
    }
    if (touchingDown) {
      this.noOfJumps = 0;
    }
    this.horizontalWrap(this.player);

    const bottomPlatform = this.findBottomMostPlatform();
    if (this.player.y > bottomPlatform.y + 200) {
      this.scene.start('GameOver', { score: this.carrotsCollected - 1 });
    }
  }

  horizontalWrap(sprite) {
    const halfWidth = sprite.displayWidth * 0.5;
    const gameWidth = this.scale.width;
    if (sprite.x < -halfWidth) {
      sprite.x = gameWidth + halfWidth;
    } else if (sprite.x > gameWidth + halfWidth) {
      sprite.x = -halfWidth;
    }
  }

  addCarrotAbove(sprite) {
    const y = sprite.y - sprite.displayHeight;
    const carrot = this.carrots.get(sprite.x, y, 'carrot');

    carrot.setActive(true);
    carrot.setVisible(true);
    this.add.existing(carrot);

    carrot.body.setSize(carrot.width, carrot.height);
    this.physics.world.enable(carrot);

    return carrot;
  }

  handleCollectCarrot(player, carrot) {
    this.carrots.killAndHide(carrot);
    this.physics.world.disableBody(carrot.body);
    this.carrotsCollected += 1;
    const value = `Carrots: ${this.carrotsCollected - 1}`;
    this.carrotsCollectedText.setText(value);

  //
  }

  findBottomMostPlatform() {
    const platforms = this.platforms.getChildren();
    let bottomPlatform = platforms[0];

    for (let i = 1; i < platforms.length; i += 1) {
      const platform = platforms[i];

      if (platform.y < bottomPlatform.y) {
        continue;
      }
      bottomPlatform = platform;
    }
    return bottomPlatform;
  }
}