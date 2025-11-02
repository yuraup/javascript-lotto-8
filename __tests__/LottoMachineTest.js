import LottoMachine from '../src/LottoMachine.js';
import { LOTTO_PRICE } from '../src/constants/numbers.js';
import { Random } from '@woowacourse/mission-utils';

describe('로또머신 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('입력한 돈 만큼 티켓을 발행한다.', () => {
    jest
      .spyOn(Random, 'pickUniqueNumbersInRange')
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([7, 8, 9, 10, 11, 12]);

    const machine = new LottoMachine();
    const tickets = machine.issue(2 * LOTTO_PRICE);

    expect(tickets.length).toBe(2);
    expect(machine.getNumbers()).toEqual([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);
  });
});
