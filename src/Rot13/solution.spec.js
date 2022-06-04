describe('Rot13 test', () => {
  it('Functions should be defined', () => {
    expect(rot13).toBeDefined();
  });

  it('Should return', () => {
    expect(rot13('test')).toEqual('grfg');
    expect(rot13('Test')).toEqual('Grfg');
  });
});