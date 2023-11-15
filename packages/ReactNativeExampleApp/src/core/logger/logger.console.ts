import { DateFormats, dateUtils } from '../utils';
import { LOGGER_COLORS, LoggerLevels, LoggerTransport } from './logger.types';

function withColor([x, y]: [number, number]) {
  const rgx = new RegExp(`\\x1b\\[${y}m`, 'g');
  const open = `\x1b[${x}m`,
    close = `\x1b[${y}m`;

  return (txt: string) => {
    if (txt == null) return txt;
    const txtHasClose = txt.indexOf(close) !== -1;

    return open + (txtHasClose ? txt.replace(rgx, close + open) : txt) + close;
  };
}

const CONSOLE_COLORS = {
  [LoggerLevels.Debug]: LOGGER_COLORS.magenta,
  [LoggerLevels.Info]: LOGGER_COLORS.default,
  [LoggerLevels.Log]: LOGGER_COLORS.default,
  [LoggerLevels.Warn]: LOGGER_COLORS.yellow,
  [LoggerLevels.Error]: LOGGER_COLORS.red,
};

export const consoleTransport: LoggerTransport = (level, message, metadata) => {
  const timestamp = dateUtils.formatBy(new Date(), DateFormats.TIME);
  const extra = Object.keys(metadata).length ? ` ${JSON.stringify(metadata, null, '  ')}` : '';
  const color = CONSOLE_COLORS[level];

  const log = level === LoggerLevels.Error ? console.error : console.log;
  const type = `[${level.toUpperCase()}]`;

  log(`${timestamp} ${withColor(color)(type)} ${message.toString()}${extra}`);
};
