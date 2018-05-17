describe('array_diff test', () => {
  it('should have a array_diff function', () => {
    expect(array_diff).toBeDefined();
  });

  it('basic', () => {
    expect(array_diff([1,2], [1])).toEqual([2]);
    expect(array_diff([1,2,2], [1])).toEqual([2,2]);
    expect(array_diff([1,2,2], [2])).toEqual([1]);
    expect(array_diff([1,2,2], [])).toEqual([1,2,2]);
    expect(array_diff([], [1,2])).toEqual([]);
  });
});