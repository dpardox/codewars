['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach((v, i) => {
  this[v] = x => x ? x(i) : i;
});

const plus = n => (a => a + n);
const minus = n => (a => a - n);
const times = n => (a => a * n);
const dividedBy = n => (a => Math.trunc(a / n));