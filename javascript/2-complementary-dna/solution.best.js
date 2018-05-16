const convert = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.replace(/./g, (c) => convert[c]);