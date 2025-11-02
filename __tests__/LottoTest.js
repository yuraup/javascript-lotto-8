import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('범위(1~45)를 벗어나면 예외가 발생한다.', () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
    expect(() => new Lotto([1, 46, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('정상 생성 시 오름차순 정렬된 getNumbers를 반환한다.', () => {
    const lotto = new Lotto([6, 1, 3, 2, 5, 4]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
