import { jest } from '@jest/globals';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
}));
