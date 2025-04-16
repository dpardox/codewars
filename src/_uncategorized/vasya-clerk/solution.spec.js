describe('Vasya - Clerk test', () => {
  it('should have a tickets function', () => {
    expect(tickets).toBeDefined();
  });

  it('should peopleInLine was [25, 25, 50, 50], expected YES', () => {
    expect(tickets([25, 25, 50, 50])).toEqual('YES');
  });

  it('should peopleInline was [25, 100], expected NO', () => {
    expect(tickets([25, 100])).toEqual('NO');
  });

  const randomize = [
    [[50, 50, 50, 50, 50, 50, 50, 50, 50, 50], "NO"],
    [[100, 100, 100, 100, 100, 100, 100, 100, 100, 100], "NO"],
    [[25, 25, 25, 25, 50, 100, 50], "YES"],
    [[25, 25], "YES"],
    [[50, 100, 100], "NO"],
    [[25, 25, 25, 25, 25, 100, 100], "NO"],
    [[25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100], "NO"]
  ];

  randomize.forEach((test) => {
    it(`should peopleInLine a was ${test[0]}, expected ${test[1]}`, () => {
      expect(tickets(test[0])).toEqual(test[1]);
    });
  });
});