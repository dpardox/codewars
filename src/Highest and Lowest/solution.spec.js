describe('Highest and Lowest Test', () => {
  it('Should be have highAndLow function', () => {
    expect(highAndLow).toBeDefined();
  });

  it('Should return "42 -9" for "8 3 -5 42 -1 0 0 -9 4 7 4 -4"', () => {
    expect(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')).toBe('42 -9');
  });

  it('Should return "3 1" for "1 2 3"', () => {
    expect(highAndLow('1 2 3')).toBe('3 1');
  });

  it('Should return "5 1" for "1 2 3 4 5"', () => {
    expect(highAndLow('1 2 3 4 5')).toBe('5 1');
  });

  it('Should return "5 -3" for "1 2 -3 4 5"', () => {
    expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
  });

  it('Should return "9 -5" for "1 9 3 4 -5"', () => {
    expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
  });
});