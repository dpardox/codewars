describe('Isograms test', () => {
  it('Should be have a isIsogram function', () => {
    expect(isIsogram).toBeDefined();
  });

  it('"Dermatoglyphics" should be true', () => {
    expect(isIsogram('Dermatoglyphics')).toBeTrue();
  });

  it('"isogram" should be true', () => {
    expect(isIsogram('isogram')).toBeTrue();
  });

  it('"aba" should be false', () => {
    expect(isIsogram('aba')).toBeFalse();
  });

  it('"moOse" should be false', () => {
    expect(isIsogram('moOse')).toBeFalse();
  });

  it('"isIsogram" should be false', () => {
    expect(isIsogram('isIsogram')).toBeFalse();
  });

  it('"" should be true', () => {
    expect(isIsogram('')).toBeTrue();
  });
});