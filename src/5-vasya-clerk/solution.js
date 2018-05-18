const tickets = peopleInLine => {
  let [n25, n50, n100] = [0, 0, 0];
  for(let i of peopleInLine) {
    switch (i) {
      case 25: n25++; break;
      case 50: n50++; n25--; break;
      case 100: n100++; n25--; (n50) ? n50-- : n25 -= 2; break;
    }

    if (n25 < 0) return 'NO';
  }
  return 'YES';
}