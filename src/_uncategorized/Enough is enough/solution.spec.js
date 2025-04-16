describe('Enough is enough Test', () => {
  it('Should be have deleteNth function', () => {
    expect(deleteNth).toBeDefined();
  });

  it('Should return', () => {
    expect(deleteNth([20,37,20,21], 1)).toEqual([20,37,21]);
    expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
  });
});