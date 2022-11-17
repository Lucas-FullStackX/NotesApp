import dayjs from 'dayjs';
/**
 * @param rawDate - Date to format.
 * @returns Formatted date.
 */
export function humanizeDate(rawDate: string): string {
  const date = dayjs(rawDate);

  return date.isValid() ? date.format('DD/MM/YYYY hh:mm A') : '-';
}