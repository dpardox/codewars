describe('Is Divisible', () => {
  it('Functions should be defined', () => {
    expect(isDivisible).toBeDefined();
  });

  it('Should return', () => {
    expect(isDivisible(3,3,4)).toEqual(false);
    expect(isDivisible(12,3,4)).toEqual(true);
    expect(isDivisible(48,3,4)).toEqual(true);
  });
});