import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';

import { DateFormats } from './date.types';

function formatBy(date: Date, dateFormat: DateFormats): string {
  return format(date, dateFormat);
}

function parseBy(date: string, dateFormat: DateFormats): Date {
  return parse(date, dateFormat, new Date());
}

export const dateUtils = {
  formatBy,
  parseBy,
};
