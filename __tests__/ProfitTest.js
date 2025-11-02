import { calculateProfit } from '../src/utils/Profit.js';
import { PRIZE_TABLE } from '../src/constants/prizes.js';

describe('Profit 테스트', () => {
  test('당첨이 하나도 없으면 0.0%를 반환한다.', () => {
    const summary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const result = calculateProfit(summary, 8000);
    expect(result).toBe('0.0');
  });

  test('5등 1개 당첨 시 수익률이 올바르게 계산된다.', () => {
    const summary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
    const expectedRate = ((PRIZE_TABLE[5] * 1) / 8000) * 100;
    const result = calculateProfit(summary, 8000);
    expect(Number(result)).toBeCloseTo(expectedRate, 1);
  });

  test('4등 1개, 5등 2개 당첨 시 수익률이 올바르게 계산된다.', () => {
    const summary = { 1: 0, 2: 0, 3: 0, 4: 1, 5: 2 };
    const totalPrize = PRIZE_TABLE[4] * 1 + PRIZE_TABLE[5] * 2;
    const expectedRate = ((totalPrize / 8000) * 100).toFixed(1);

    const result = calculateProfit(summary, 8000);
    expect(result).toBe(expectedRate);
  });

  test('모든 등수가 포함된 경우에도 정확히 계산된다.', () => {
    const summary = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };
    const totalPrize =
      PRIZE_TABLE[1] +
      PRIZE_TABLE[2] +
      PRIZE_TABLE[3] +
      PRIZE_TABLE[4] +
      PRIZE_TABLE[5];
    const expectedRate = ((totalPrize / 8000) * 100).toFixed(1);

    const result = calculateProfit(summary, 8000);
    expect(result).toBe(expectedRate);
  });

  test('summary에 없는 등수 키는 무시한다.', () => {
    // 존재하지 않는 키를 포함한다.
    const summary = { 5: 1, 6: 3, 10: 2 };
    const expectedRate = ((PRIZE_TABLE[5] / 8000) * 100).toFixed(1);
    const result = calculateProfit(summary, 8000);
    expect(result).toBe(expectedRate);
  });

  test('당첨금이 0이더라도 형식은 문자열로 반환된다.', () => {
    const summary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const result = calculateProfit(summary, 10000);
    expect(typeof result).toBe('string');
    expect(result).toBe('0.0');
  });
});
