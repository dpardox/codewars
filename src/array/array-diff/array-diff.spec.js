describe('array_diff test', () => {
  it('should have a array_diff function', () => {
    expect(array_diff).toBeDefined();
  });

  it('should a was [1,2], b was [1], expected [2]', () => {
    expect(array_diff([1,2], [1])).toEqual([2]);
  });

  it('should a was [1,2,2], b was [1], expected [2,2]', () => {
    expect(array_diff([1,2,2], [1])).toEqual([2,2]);
  });

  it('should a was [1,2,2], b was [2], expected [1]', () => {
    expect(array_diff([1,2,2], [2])).toEqual([1]);
  });

  it('should a was [1,2,2], b was [], expected [1,2,2]', () => {
    expect(array_diff([1,2,2], [])).toEqual([1,2,2]);
  });

  it('should a was [], b was [1,2], expected []', () => {
    expect(array_diff([], [1,2])).toEqual([]);
  });
});