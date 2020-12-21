

export default anims =>{
  anims.create({
    key: 'idle',
    frames: anims.generateFrameNumbers('sparky', { start: 0, end: 8 }),
    frameRate: 10,
    repeat: -1
});
anims.create({
  key: 'run',
  frames: anims.generateFrameNumbers('sparky', { start: 11, end: 16 }),
  frameRate: 10,
  repeat: -1
});
}