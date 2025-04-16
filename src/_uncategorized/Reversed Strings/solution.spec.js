describe('Reversed Strings Test', () => {
  it('Should be have solution function', () => {
    expect(solution).toBeDefined();
  });

  it('Should return "dlrow" for "world"', () => {
    expect(solution('world')).toBe('dlrow');
  });

  it('Should return "olleh" for "hello"', () => {
    expect(solution('hello')).toBe('olleh');
  });

  it('Should return "" for ""', () => {
    expect(solution('')).toBe('');
  });

  it('Should return "h" for "h"', () => {
    expect(solution('h')).toBe('h');
  });

  it('Should return "navonoD" for "Donovan"', () => {
    expect(solution('Donovan')).toBe('navonoD');
  });

  it('Should return "kratS" for "Stark"', () => {
    expect(solution('Stark')).toBe('kratS');
  });
});