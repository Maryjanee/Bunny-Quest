import 'phaser';

 
export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#a0a0dd",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },  scale: {

    autoCenter: Phaser.Scale.CENTER_BOTH
  }
  
};

function randomNumGen() {
  return Math.round((Math.random() *( Math.abs(9 - 4))) + 4);
}

 function levelSetup() {
   let platFormArr = [];
   for(let i = 0; i < 1000; i++){
platFormArr.push(randomNumGen())
}
return platFormArr;
}