function likes(names) {
  const len = names.length;
  const latest = names.pop();
  switch (len) {
    case 0: return 'no one likes this'; break;
    case 1: return `${latest} likes this`; break
    case 2: return `${names.shift()} and ${latest} like this`; break
    case 3: return `${names.join(', ')} and ${latest} like this`; break
    default: return `${names.slice(0,2).join(', ')} and ${len - 2} others like this`
  }
}