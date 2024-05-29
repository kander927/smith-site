import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Cookies from 'js-cookie';

export class CookieUtil {
  static saveSetting(name: string, value: string | boolean): void {
    const cookieValue = typeof value === 'boolean' ? String(value) : value;
    Cookies.set(name, cookieValue, { expires: 365 });
    console.log(`Saved cookie setting: ${name} = ${cookieValue}`);
  }

  static getSetting(name: string): string | undefined {
    const value = Cookies.get(name);
    console.log(`Retrieved cookie setting: ${name} = ${value}`);
    return value;
  }
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeInMDT = () => {
  const currentDate = new Date();
  const utcOffset = -7;

  const isDST = (() => {
    const year = currentDate.getFullYear();
    const dstStart = new Date(year, 2, 8);
    const dstEnd = new Date(year, 10, 1);
    dstStart.setDate(14 - dstStart.getDay());
    dstEnd.setDate(7 - dstEnd.getDay() + 31 * 2);
    return currentDate.getTime() >= dstStart.getTime() && currentDate.getTime() < dstEnd.getTime();
  })();

  const offset = isDST ? utcOffset + 1 : utcOffset;

  const utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
  const mdt = new Date(utc + 3600000 * offset);

  return mdt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Denver' });
};