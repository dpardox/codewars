const rgb = (r, g, b) => `${hex(r)}${hex(g)}${hex(b)}`;
const hex = n => Math.min(Math.max(n, 0), 255).toString(16).toUpperCase().padStart(2, '0');