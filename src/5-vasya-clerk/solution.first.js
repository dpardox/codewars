function tickets(peopleInLine){
  let c = { 25: 0, 50: 0, 100: 0 };
  for(let i of peopleInLine) {
    switch (i) {
      case 50: c[25]--; break;
      case 100:
        if (c[50]) {
          c[50]--;
          c[25]--;
        } else {
          c[25] -= 3;
        }
    }

    if (c[25] < 0) {
      return 'NO';
    }

    c[i]++;
  }
  return 'YES';
}