function XO(str) {
    let o = str.match(/o/gi).length;
    let x = str.match(/x/gi).length;
    return o === x;
}