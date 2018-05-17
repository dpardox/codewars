describe('Complementary DNA test', () => {
  it('should have a DNAStrand function', () => {
    expect(DNAStrand).toBeDefined();
  });

  it('basic', () => {
    expect(DNAStrand('AAAA')).toEqual('TTTT');
    expect(DNAStrand('ATTGC')).toEqual('TAACG');
    expect(DNAStrand('GTAT')).toEqual('CATA');
    expect(DNAStrand('AAGG')).toEqual('TTCC');
    expect(DNAStrand('CGCG')).toEqual('GCGC');
    expect(DNAStrand('GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA')).toEqual('CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT');
  });
});