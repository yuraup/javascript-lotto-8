import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  LOTTO_PRICE,
  LOTTO_SIZE,
  MAX_NUMBER,
  MIN_NUMBER,
} from './constants/numbers.js';

export default class LottoMachine {
  #tickets;

  constructor() {
    this.#tickets = [];
  }

  issue(money) {
    const count = money / LOTTO_PRICE;

    this.#tickets = Array.from({ length: count }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(
        MIN_NUMBER,
        MAX_NUMBER,
        LOTTO_SIZE,
      );
      return new Lotto(randomNumbers);
    });
    return this.#tickets;
  }

  getNumbers() {
    return this.#tickets.map((ticket) => ticket.getNumbers());
  }
}
