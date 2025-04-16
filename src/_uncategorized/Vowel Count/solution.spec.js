describe('Vowel Count Test', () => {
  it('Should be have getCount function', () => {
    expect(getCount).toBeDefined();
  });

  it('should return 5 for "abracadabra"', () => {
    expect(getCount('abracadabra')).toBe(5);
  });

  it('should return 5 for "angular"', () => {
    expect(getCount('angular')).toBe(3);
  });

  it('should return 4 for "pear tree"', () => {
    expect(getCount('pear tree')).toBe(4);
  });

  it('should return 13 for "o a kak ushakov lil vo kashu kakao"', () => {
    expect(getCount('o a kak ushakov lil vo kashu kakao')).toBe(13);
  });

  it('should return 0 for "my pyx"', () => {
    expect(getCount('my pyx')).toBe(0);
  });
});