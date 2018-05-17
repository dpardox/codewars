describe('Multiply test', () => {
  it('should have a multiply function', () => {
    expect(multiply).toBeDefined();
  });

  it('should multiply numbers', () => {
    expect(multiply(1, 1)).toEqual(1);
    expect(multiply(2, 1)).toEqual(2);
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(3, 5)).toEqual(15);
  });
});