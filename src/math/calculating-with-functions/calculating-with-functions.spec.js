describe('Calculating with Functions test', () => {
  it('Functions should be defined', () => {
    expect(zero).toBeDefined();
    expect(one).toBeDefined();
    expect(two).toBeDefined();
    expect(three).toBeDefined();
    expect(four).toBeDefined();
    expect(five).toBeDefined();
    expect(six).toBeDefined();
    expect(seven).toBeDefined();
    expect(eight).toBeDefined();
    expect(nine).toBeDefined();
    expect(plus).toBeDefined();
    expect(minus).toBeDefined();
    expect(times).toBeDefined();
    expect(dividedBy).toBeDefined();
  });

  it('add', () => {
    expect(four(plus(nine()))).toEqual(13);
  });

  it('substract', () => {
    expect(eight(minus(three()))).toEqual(5);
  });

  it('multiply', () => {
    expect(seven(times(five()))).toEqual(35);
  });
  
  it('divide', () => {
    expect(six(dividedBy(two()))).toEqual(3);
    expect(eight(dividedBy(three()))).toEqual(2);
  });
});