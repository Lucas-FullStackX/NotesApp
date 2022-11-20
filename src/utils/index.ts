import dayjs from 'dayjs';
import { SUPABASE_KEY, SUPABASE_URL } from '../constants';
/**
 * @param rawDate - Date to format.
 * @returns Formatted date.
 */
export function humanizeDate(rawDate: string): string {
  const date = dayjs(rawDate);

  return date.isValid() ? date.format('DD/MM/YYYY hh:mm A') : '-';
}
/**
 * @param path - Storage path.
 * @returns Formatted date.
 */
export function getImageURL(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/sign/store/${path}?token=${SUPABASE_KEY}`;
}
