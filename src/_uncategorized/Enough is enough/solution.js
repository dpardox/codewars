const deleteNth = (arr, n) => {
  return arr.reduce((a, c) => {
    if (a.filter(x => x === c).length < n) a.push(c);
    return a;
  }, []);
};