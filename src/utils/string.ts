export function daysBetweenDates(otherDate: Date): number {
  // Get the current date and time
  const now: Date = new Date();

  // Calculate the difference in milliseconds
  const diffInMs: number = now.getTime() - otherDate.getTime();

  // Milliseconds per day: 1000ms * 60s * 60m * 24h
  const msPerDay: number = 1000 * 60 * 60 * 24;

  // Convert the millisecond difference to days and round to the nearest whole number
  // Math.round is often used, but you might use Math.floor or Math.ceil
  // depending on how you want to handle partial days (e.g., whether a partial day counts as a full day)
  const diffInDays: number = Math.round(diffInMs / msPerDay);

  return diffInDays;
}
