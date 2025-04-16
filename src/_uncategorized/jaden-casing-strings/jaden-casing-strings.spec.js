describe('Jaden Casing test', () => {
  it('Functions should be defined', () => {
    expect(String.prototype.toJadenCase).toBeDefined();
  });

  it('Should return', () => {
    const str = `How can mirrors be real if our eyes aren't real`;
    expect(str.toJadenCase()).toEqual(`How Can Mirrors Be Real If Our Eyes Aren't Real`);
  });
});