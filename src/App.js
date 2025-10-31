import { Reader } from './io/Reader.js';
import { Printer } from './io/Printer.js';
import { User } from './User.js';
import { validateMoney } from './utils/Validators.js';

class App {
  constructor() {
    this.reader = new Reader();
    this.printer = new Printer();
    this.user = new User();
  }

  async run() {
    await this.collectInputs();
  }

  async collectInputs() {
    while (true) {
      try {
        const inputMoney = await this.reader.askMoney();
        const money = validateMoney(inputMoney);
        this.user.setMoney(money);
        return;
      } catch (error) {
        this.printer.printError(error.message);
      }
    }
  }
}

export default App;
