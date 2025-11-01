import { Console } from '@woowacourse/mission-utils';
import { InputMessages } from '../constants/messages.js';

export class Reader {
  async askMoney() {
    return Console.readLineAsync(InputMessages.MONEY);
  }

  async askWinning() {
    return Console.readLineAsync(InputMessages.WINNING);
  }
}
