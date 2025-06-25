export function generatePassword(
  length: number,
  useUpper: boolean,
  useLower: boolean,
  useNumbers: boolean,
  useSymbols: boolean,
  symbols: string
): string {
  let minPerSet = 1;
  if (length <= 10) minPerSet = 2;
  else if (length <= 15) minPerSet = 3;
  else if (length <= 20) minPerSet = 4;
  else minPerSet = 5;

  const charSets: string[] = [];
  if (useUpper) charSets.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (useLower) charSets.push('abcdefghijklmnopqrstuvwxyz');
  if (useNumbers) charSets.push('0123456789');
  if (useSymbols && symbols) charSets.push(symbols);

  if (charSets.length === 0) {
    return 'Valitse vähintään yksi merkistö!';
  }

  if (minPerSet * charSets.length > length) {
    return 'Pituus liian lyhyt valittuihin merkistöihin nähden!';
  }

  let passwordArr: string[] = [];

  // Lisää minPerSet kutakin merkistöä
  for (const set of charSets) {
    for (let i = 0; i < minPerSet; i++) {
      const idx = Math.floor(Math.random() * set.length);
      passwordArr.push(set[idx]);
    }
  }

  // Täytä loput satunnaisesti kaikista valituista merkeistä
  let allChars = charSets.join('');
  while (passwordArr.length < length) {
    const idx = Math.floor(Math.random() * allChars.length);
    passwordArr.push(allChars[idx]);
  }

  // Sekoita salasana
  for (let i = passwordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArr[i], passwordArr[j]] = [passwordArr[j], passwordArr[i]];
  }

  return passwordArr.join('');
} 