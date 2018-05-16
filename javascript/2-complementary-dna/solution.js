function DNAStrand(dna){
  const convert = { A: 'T', T: 'A', C: 'G', G: 'C' };
  dna = dna.toUpperCase();
  let response = '';
  for (let char of dna) {
    response += convert[char] ? convert[char]: char;
  }
  return response;
}