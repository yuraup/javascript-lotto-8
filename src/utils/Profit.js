import { PRIZE_TABLE } from '../constants/prizes.js';

export function calculateProfit(summary, money) {
  let total = 0;

  Object.keys(summary).forEach((rankKey) => {
    const count = summary[rankKey] || 0;
    const prize = PRIZE_TABLE[rankKey] || 0;
    total += prize * count;
  });

  const rate = (total / money) * 100;
  return rate.toFixed(1);
}
