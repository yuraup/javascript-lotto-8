export function getRank(lottoNumbers, winningNumbers, bonusNumber) {
  const matchCount = lottoNumbers.filter((number) =>
    winningNumbers.includes(number),
  ).length;

  if (matchCount === 6) return 1;
  if (matchCount === 5) {
    if (lottoNumbers.includes(bonusNumber)) {
      return 2;
    }
    return 3;
  }
  if (matchCount === 4) return 4;
  if (matchCount === 3) return 5;
  return 0;
}
