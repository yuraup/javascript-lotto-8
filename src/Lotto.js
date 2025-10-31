import { errorMessages } from './constants/errors.js';
import { LOTTO_SIZE, MAX_NUMBER, MIN_NUMBER } from './constants/numbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_SIZE) {
      throw new Error(errorMessages.LOTTO_SIZE);
    }

    if (!this.#isInRange(numbers)) {
      throw new Error(errorMessages.LOTTO_RANGE);
    }

    if (this.#isDuplicated(numbers)) {
      throw new Error(errorMessages.LOTTO_OVERLAP);
    }
  }

  #isInRange(numbers) {
    return numbers.every(
      (number) => number >= MIN_NUMBER && number <= MAX_NUMBER,
    );
  }

  #isDuplicated(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
