function XO(str) {
    let o = 0;
    let x = 0;
    [...str.toLowerCase()].filter(i => i === 'x' || i === 'o').forEach(e => { e === 'o' ? o++ : x++ });
    return o === x;
}