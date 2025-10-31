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
}
