import { errorMessages } from '../constants/errors.js';
import { MIN_NUMBER, MAX_NUMBER } from '../constants/numbers.js';

export function validateMoney(input) {
  const trimmed = input.trim();
  if (trimmed === '') throw new Error(errorMessages.COMMON_EMPTY);
  if (!/^\d+$/.test(trimmed)) throw new Error(errorMessages.MONEY_TYPE);

  const amount = Number(trimmed);
  if (amount < 1000) throw new Error('[ERROR] 최소 구입 금액은 1,000원입니다.');
  if (amount % 1000 !== 0) throw new Error(errorMessages.MONEY_UNIT);

  return amount;
}

export function validateBonus(bonuseNumber, winningNumbers) {
  if (bonuseNumber < MIN_NUMBER || bonuseNumber > MAX_NUMBER)
    throw new Error(errorMessages.LOTTO_RANGE);

  if (winningNumbers.includes(bonuseNumber))
    throw new Error(errorMessages.BONUS_OVERLAP);

  return bonuseNumber;
}
