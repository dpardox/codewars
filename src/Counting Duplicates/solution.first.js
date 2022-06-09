const duplicateCount = text => {
  const counting = text.toLowerCase().split('').reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  return Object.values(counting).filter(v => v > 1).length;
};