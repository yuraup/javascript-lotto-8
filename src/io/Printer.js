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
    Console.print(`\n${lottoSize}개를 구매했습니다.`);
  }

  printLottoList(tickets) {
    tickets.forEach((ticket) => Console.print(ticket));
  }

  printResultTitle() {
    Console.print('\n당첨 통계');
    Console.print('---');
  }

  printResult(resultCounts) {
    const order = [5, 4, 3, 2, 1];
    const lines = {
      5: '3개 일치 (5,000원) - ',
      4: '4개 일치 (50,000원) - ',
      3: '5개 일치 (1,500,000원) - ',
      2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      1: '6개 일치 (2,000,000,000원) - ',
    };
    order.forEach((rank) => {
      const count = resultCounts[rank] || 0;
      Console.print(`${lines[rank]}${count}개`);
    });
  }

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}
