export function fuzzySearch(searchTerm: string, value: string): boolean {
  let index = -1;
  for (let i = 0; i < searchTerm.length; i ++) {
    const char = searchTerm.charAt(i);
    const nextIndex = value.indexOf(char, index);
    if (nextIndex === -1) return false;
    index = nextIndex + 1;
  }
  return true;
}
