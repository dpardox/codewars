describe('Multiply test', () => {
  it('should have a multiply function', () => {
    expect(multiply).toBeDefined();
  });

  it('should a was 1, b was 1, expected 1', () => {
    expect(multiply(1, 1)).toEqual(1);
  });

  it('should a was 2, b was 1, expected 2', () => {
    expect(multiply(2, 1)).toEqual(2);
  });

  it('should a was 2, b was 2, expected 4', () => {
    expect(multiply(2, 2)).toEqual(4);
  });

  it('should a was 3, b was 5, expected 15', () => {
    expect(multiply(3, 5)).toEqual(15);
  });

  it('should a was -5, b was 5, expected -25', () => {
    expect(multiply(-5, 5)).toEqual(-25);
  });
});