const convert = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.toUpperCase().replace(/./g, (c) => convert[c]);