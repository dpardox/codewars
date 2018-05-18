describe('Complementary DNA test', () => {
  it('should have a DNAStrand function', () => {
    expect(DNAStrand).toBeDefined();
  });

  it('should dna was AAAA, expected TTTT', () => {
    expect(DNAStrand('AAAA')).toEqual('TTTT');
  });

  it('should dna was ATTGC, expected TAACG', () => {
    expect(DNAStrand('ATTGC')).toEqual('TAACG');
  });

  it('should dna was GTAT, expected CATA', () => {
    expect(DNAStrand('GTAT')).toEqual('CATA');
  });

  it('should dna was AAGG, expected TTCC', () => {
    expect(DNAStrand('AAGG')).toEqual('TTCC');
  });

  it('should dna was CGCG, expected GCGC', () => {
    expect(DNAStrand('CGCG')).toEqual('GCGC');
  });

  it('should dna was GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA, expected CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT', () => {
    expect(DNAStrand('GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA')).toEqual('CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT');
  });
});