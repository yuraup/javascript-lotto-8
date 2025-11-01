import { Reader } from './io/Reader.js';
import { Printer } from './io/Printer.js';
import { User } from './User.js';
import LottoMachine from './LottoMachine.js';
import { validateMoney } from './utils/Validators.js';

class App {
  constructor() {
    this.reader = new Reader();
    this.printer = new Printer();
    this.lottoMachine = new LottoMachine();
    this.user = new User();
  }

  async run() {
    await this.#purchase();
    await this.#collectWinning();
  }

  async #purchase() {
    const money = await this.#purchaseRetry();
    this.user.setMoney(money);

    this.lottoMachine.issue(money);
    const tickets = this.lottoMachine.getNumbers();

    this.printer.printLottoSize(tickets.length);
    this.printer.printLottoList(tickets);
  }

  async #collectWinning() {
    const winning = await this.#winningRetry();
  }

  async #retry(step) {
    while (true) {
      try {
        return await step();
      } catch (error) {
        this.printer.printError(error.message);
      }
    }
  }

  async #purchaseRetry() {
    return this.#retry(async () => {
      const inputMoney = await this.reader.askMoney();
      return validateMoney(inputMoney);
    });
  }

  async #winningRetry() {
    return this.#retry(async () => {
      const inputWinning = await this.reader.askWinning();
    });
  }
}

export default App;
