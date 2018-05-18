describe('Who likes it? test', () => {
  it('should have likes function', () => {
    expect(likes).toBeDefined();
  });

  it('should names was [], expected "no one likes this"', () => {
    expect(likes([])).toEqual('no one likes this');
  });

  it('should names was ["Peter"], expected "Peter likes this"', () => {
    expect(likes(['Peter'])).toEqual('Peter likes this');
  });

  it('should names was ["Jacob", "Alex"], expected "Jacob and Alex like this"', () => {
    expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
  });

  it('should names was ["Max", "John", "Mark"], expected "Max, John and Mark like this"', () => {
    expect(likes(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this');
  });

  it('should names was ["Alex", "Jacob", "Mark", "Max"], expected "Alex, Jacob and 2 others like this"', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this');
  });
});