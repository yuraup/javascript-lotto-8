import { Reader } from './io/Reader.js';
import { Printer } from './io/Printer.js';
import { User } from './User.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import { validateMoney, validateBonus } from './utils/Validators.js';
import { parseWinning, parseBonus } from './utils/Parser.js';
import { calculateProfit } from './utils/Profit.js';
import { getRank } from './utils/Ranker.js';

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
    await this.#collectBonus();
    await this.#compareResults();
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
    const winningNumbers = await this.#winningRetry();
    this.user.setWinning(winningNumbers);
  }

  async #collectBonus() {
    const bonusNumber = await this.#bonusRetry();
    this.user.setBonus(bonusNumber);
  }

  async #compareResults() {
    const tickets = this.lottoMachine.getNumbers();
    const ranks = tickets.map((ticket) =>
      getRank(ticket, this.user.winningNumbers, this.user.bonusNumber),
    );

    const summary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    ranks.forEach((rank) => {
      if (rank > 0) {
        summary[rank] += 1;
      }
    });

    const profit = calculateProfit(summary, this.user.money);

    this.printer.printResultTitle();
    this.printer.printResult(summary);
    this.printer.printProfit(profit);
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

      const parsed = parseWinning(inputWinning);

      const lotto = new Lotto(parsed);

      return lotto.getNumbers();
    });
  }

  async #bonusRetry() {
    return this.#retry(async () => {
      const inputBonus = await this.reader.askBonus();

      const parsed = parseBonus(inputBonus);
      return validateBonus(parsed, this.user.winningNumbers);
    });
  }
}

export default App;
