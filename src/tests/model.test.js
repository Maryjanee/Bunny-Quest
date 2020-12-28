import Model from '../Model';

describe('constructs a new Model object', () => {
  const model = new Model();

  it('returns an object whose prototype is a Model', () => {
    expect(
      Object.getPrototypeOf(model) === Object.getPrototypeOf(new Model()),
    ).toBe(true);
  });

  it('returns a true value for soundOn', () => {
    expect(model.soundOn).toBe(true);
  });

  it('returns a true value for musicOn', () => {
    expect(model.musicOn).toBe(true);
  });

  it('returns a true value for bgMusicPlaying', () => {
    expect(model.bgMusicPlaying).toBe(false);
  });
});