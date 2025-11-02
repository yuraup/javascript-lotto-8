import {
  validateMoney,
  validateWinningNumbers,
  validateBonus,
} from '../src/utils/Validators.js';

describe('Validator 테스트', () => {
  describe('1000 단위의 올바른 돈을 입력한다.', () => {
    test.each(['', 'abc', '-1000', '999', '1500'])(
      '%s 입력 시 예외가 발생한다.',
      (input) => {
        expect(() => validateMoney(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1000', '   2000  ', '5000'])('%s 유효', (input) => {
      expect(validateMoney(input)).toBe(Number(input.trim()));
    });
  });

  describe('올바른 보너스 번호를 입력한다.', () => {
    test('보너스 번호가 범위 밖이면 예외가 발생한다.', () => {
      expect(() => validateBonus(0, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
      expect(() => validateBonus(46, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
    });

    test('보너스 번호가 당첨번호와 중복이면 예외가 발생한다.', () => {
      expect(() => validateBonus(6, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
    });

    test('올바른 보너스 번호를 입력했다.', () => {
      expect(validateBonus(7, [1, 2, 3, 4, 5, 6])).toBe(7);
    });
  });
});
