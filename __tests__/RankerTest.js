import { getRank } from '../src/utils/Ranker.js';

describe('Ranker 테스트', () => {
  const winning = [1, 2, 3, 4, 5, 6];
  const bonus = 7;

  test('6개 모두 일치하면 1등을 반환한다.', () => {
    const result = getRank([1, 2, 3, 4, 5, 6], winning, bonus);
    expect(result).toBe(1);
  });

  test('5개 일치 + 보너스 번호 포함이면 2등을 반환한다.', () => {
    const result = getRank([1, 2, 3, 4, 5, 7], winning, bonus);
    expect(result).toBe(2);
  });

  test('5개 일치 + 보너스 번호 미포함이면 3등을 반환한다.', () => {
    const result = getRank([1, 2, 3, 4, 5, 8], winning, bonus);
    expect(result).toBe(3);
  });

  test('4개 일치하면 4등을 반환한다.', () => {
    const result = getRank([1, 2, 3, 4, 8, 9], winning, bonus);
    expect(result).toBe(4);
  });

  test('3개 일치하면 5등을 반환한다.', () => {
    const result = getRank([1, 2, 3, 8, 9, 10], winning, bonus);
    expect(result).toBe(5);
  });

  test('2개 이하 일치 시 0등(꽝)을 반환한다.', () => {
    const result1 = getRank([1, 2, 8, 9, 10, 11], winning, bonus);
    const result2 = getRank([8, 9, 10, 11, 12, 13], winning, bonus);
    expect(result1).toBe(0);
    expect(result2).toBe(0);
  });

  test('보너스 번호는 5개 일치일 때만 2등 계산에 영향을 준다.', () => {
    // 4개 + 보너스 포함이어도 4등
    const result1 = getRank([1, 2, 3, 4, 7, 9], winning, bonus);
    // 3개 + 보너스 포함이어도 5등
    const result2 = getRank([1, 2, 3, 7, 9, 10], winning, bonus);

    expect(result1).toBe(4);
    expect(result2).toBe(5);
  });
});
