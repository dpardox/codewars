describe('Pythagorean triple Test', () => {
  it('Functions should be defined', () => {
    expect(findTripleTo).toBeDefined();
  });

  it('Should return', () => {
    expect(findTripleTo(1000)).toEqual([200, 375, 425]);
  });
});