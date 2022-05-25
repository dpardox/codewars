const zero = x => x ? x(0) : 0;
const one = x => x ? x(1) : 1;
const two = x => x ? x(2) : 2;
const three = x => x ? x(3) : 3;
const four = x => x ? x(4) : 4;
const five = x => x ? x(5) : 5;
const six = x => x ? x(6) : 6;
const seven = x => x ? x(7) : 7;
const eight = x => x ? x(8) : 8;
const nine = x => x ? x(9) : 9;

const plus = n => (a => a + n);
const minus = n => (a => a - n);
const times = n => (a => a * n);
const dividedBy = n => (a => Math.trunc(a / n));