describe('Opposite number test', () => {
  it('should have a opposite function', () => {
    expect(opposite).toBeDefined();
  });

  it('should number was 1, expected -1', () => {
    expect(opposite(1)).toEqual(-1);
  });

  it('should number was 0, expected 0', () => {
    expect(opposite(0)).toEqual(0);
  });

  it('should number was 4.25, expected -4.25', () => {
    expect(opposite(4.25)).toEqual(-4.25);
  });

  it('should number was 3.3333333, expected -3.3333333', () => {
    expect(opposite(3.3333333)).toEqual(-3.3333333);
  });

  it('should number was -12525220.3325, expected 12525220.3325', () => {
    expect(opposite(-12525220.3325)).toEqual(12525220.3325);
  });

  it('should number was -5, expected 5', () => {
    expect(opposite(-5)).toEqual(5);
  });
});