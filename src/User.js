export class User {
  constructor() {
    this.money = 0;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  setMoney(money) {
    this.money = money;
  }

  setWinning(winningNumbers) {
    this.winningNumbers = winningNumbers;
  }

  setBonus(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }
}
