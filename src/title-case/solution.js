const titleCase = (t, m='') => {
  m = ` ${m.toLowerCase()} `;
  return t.toLowerCase().split(' ').map((x, i) => {
    return (i && m.search(` ${x} `) > -1) || !x ? x : `${x[0].toUpperCase()}${x.slice(1)}`
  }).join(' ')
}