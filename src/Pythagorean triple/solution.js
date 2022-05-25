const isTriple = (a, b, c) => Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2); // Triples Pitagórico

const findTripleTo = (n) => {
  for (let a = 1; a < n; a++) {
    for (let b = 1; b < n; b++) {
      for (let c = n; c > 0; c--) { // Ciclo de n a 1
        if (a + b + c === n && isTriple(a, b, c)) { // Si cumple las condiciones
          return [a, b, c];
        }
      }
    }
  }
};