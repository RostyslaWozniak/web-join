export function haveDaysPassedSince(date: Date, days: number): boolean {
  const now = new Date();
  const millisecondsInDay = 24 * 60 * 60 * 1000;

  const thresholdDate = new Date(now.getTime() - days * millisecondsInDay);

  return date > thresholdDate;
}
