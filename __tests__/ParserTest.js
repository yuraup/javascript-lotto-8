import { parseWinning, parseBonus } from '../src/utils/Parser.js';
import { errorMessages } from '../src/constants/errors.js';

describe('Parser 테스트', () => {
  describe('parseWinning() 테스트', () => {
    test('입력값이 비어 있으면 예외가 발생한다.', () => {
      expect(() => parseWinning('')).toThrow(errorMessages.COMMON_EMPTY);
      expect(() => parseWinning('   ')).toThrow(errorMessages.COMMON_EMPTY);
    });

    test('구분자가 ","가 아니고 "."일 경우 예외가 발생한다.', () => {
      expect(() => parseWinning('1.2.3.4.5.6')).toThrow(
        errorMessages.LOTTO_SEPERATOR,
      );
    });

    test('문자 또는 특수문자가 포함되면 예외가 발생한다.', () => {
      expect(() => parseWinning('1,a,3,4,5,6')).toThrow(
        errorMessages.LOTTO_TYPE,
      );
      expect(() => parseWinning('1,2,3,4,5,@')).toThrow(
        errorMessages.LOTTO_TYPE,
      );
    });

    test('정상 입력 시 문자열을 숫자 배열로 변환한다.', () => {
      expect(parseWinning('1,2,3,4,5,6')).toEqual([1, 2, 3, 4, 5, 6]);
      expect(parseWinning(' 1 , 2 , 3 , 4 , 5 , 6 ')).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });
  });

  describe('parseBonus() 테스트', () => {
    test('입력값이 비어 있으면 예외가 발생한다.', () => {
      expect(() => parseBonus('')).toThrow(errorMessages.COMMON_EMPTY);
      expect(() => parseBonus('   ')).toThrow(errorMessages.COMMON_EMPTY);
    });

    test('숫자가 아닌 문자가 입력되면 예외가 발생한다.', () => {
      expect(() => parseBonus('a')).toThrow(errorMessages.LOTTO_TYPE);
      expect(() => parseBonus('3.5')).toThrow(errorMessages.LOTTO_TYPE);
    });

    test('정상 입력 시 정수로 변환한다.', () => {
      expect(parseBonus('7')).toBe(7);
      expect(parseBonus('   42   ')).toBe(42);
    });
  });
});
