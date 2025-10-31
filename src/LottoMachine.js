import Lotto from './Lotto.js';
import { LOTTO_PRICE } from './constants/numbers.js';

export class LottoMachine {
  issue(money) {
    const count = Math.floor(money / LOTTO_PRICE);

    const tickets = Array.from(
      { length: count },
      () => new Lotto([0, 0, 0, 0, 0, 0]),
    );
    return tickets;
  }
}
