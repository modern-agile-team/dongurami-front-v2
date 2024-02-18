/*
 * Created on Sun Feb 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

class Converter {
  /**
   * px을 rem으로 변환합니다.
   */
  public pxToRem(px: number) {
    return `${px / 16}rem`;
  }

  /**
   * 타임스탬프를 날짜 형태로 변환합니다.
   */
  public timestampToDate(
    timestamp: number,
    options?: Intl.DateTimeFormatOptions
  ) {
    const date = new Date(timestamp);
    return date.toLocaleDateString(
      "ko-KR",
      options ?? { year: "numeric", month: "long", day: "numeric" }
    );
  }

  /**
   * 타임스탬프의 날짜가 오늘로부터 며칠이나 남았는지 반환합니다.
   *
   * ```typescript
   *
   * // 예시 - 오늘 날짜 '2024-01-01'
   * const targetDay = new Date('2024-01-14');
   * daysFromToday(targetDay.getTime()) // 13
   * ```
   */
  public daysFromToday(timestamp: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const targetDate = new Date(timestamp);
    targetDate.setHours(0, 0, 0, 0);

    const difference = targetDate.getTime() - today.getTime();

    const daysDifference = difference / (1000 * 60 * 60 * 24);

    return Math.round(daysDifference);
  }
}

export default new Converter();
