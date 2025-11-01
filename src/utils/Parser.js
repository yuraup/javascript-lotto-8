import { errorMessages } from '../constants/errors.js';

export function parseWinning(inputWinning) {
  if (inputWinning.trim() === '') {
    throw new Error(errorMessages.COMMON_EMPTY);
  }

  if (inputWinning.includes('.') && !inputWinning.includes(',')) {
    throw new Error(errorMessages.LOTTO_SEPERATOR);
  }

  const numbers = inputWinning.split(',').map((number) => number.trim());
  const nonInteger = numbers.find((number) => !/^\d+$/.test(number));

  if (nonInteger) {
    throw new Error(errorMessages.LOTTO_TYPE);
  }

  return numbers.map((number) => Number(number));
}
