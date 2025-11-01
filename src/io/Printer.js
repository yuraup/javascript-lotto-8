import { Console } from '@woowacourse/mission-utils';

export class Printer {
  print(message) {
    Console.print(message);
  }

  printMessage(message) {
    this.print(message);
  }

  printError(error) {
    Console.print(error);
  }

  printLottoSize(lottoSize) {
    Console.print(`\n ${lottoSize}개를 구매했습니다. \n`);
  }

  printLottoList(tickets) {
    tickets.forEach((ticket) => Console.print(ticket));
  }
}
