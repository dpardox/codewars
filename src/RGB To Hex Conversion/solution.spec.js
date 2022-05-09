describe('RGB To Hex Conversion Test', () => {
  it('Should be have rgb function', () => {
    expect(rgb).toBeDefined();
  });

  it('Should return "000000" for "rgb(0, 0, 0)"', () => {
    expect(rgb(0, 0, 0)).toBe('000000');
  });

  it('Should return "000000" for "rgb(0, 0, -20)"', () => {
    expect(rgb(0, 0, -20)).toBe('000000');
  });

  it('Should return "FFFFFF" for "rgb(300,255,255)"', () => {
    expect(rgb(300,255,255)).toBe('FFFFFF');
  });

  it('Should return "000000" for "rgb(173,255,47)"', () => {
    expect(rgb(173,255,47)).toBe('ADFF2F');
  });

  it('Should return "FFFFFF" for "rgb(255, 255, 255)"', () => {
    expect(rgb(255, 255, 255)).toBe('FFFFFF');
  });

  it('Should return "FFFFFF" for "rgb(255, 255, 300)"', () => {
    expect(rgb(255, 255, 300)).toBe('FFFFFF');
  });

  it('Should return "9400D3" for "rgb(148, 0, 211)"', () => {
    expect(rgb(148, 0, 211)).toBe('9400D3');
  });
});