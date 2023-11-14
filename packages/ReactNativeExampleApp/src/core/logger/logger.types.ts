export enum LoggerLevels {
  Debug = 'debug',
  Info = 'info',
  Log = 'log',
  Warn = 'warn',
  Error = 'error',
}

export const ENABLED_LOG_LEVELS: Record<LoggerLevels, LoggerLevels[]> = {
  [LoggerLevels.Debug]: [
    LoggerLevels.Debug,
    LoggerLevels.Info,
    LoggerLevels.Log,
    LoggerLevels.Warn,
    LoggerLevels.Error,
  ],
  [LoggerLevels.Info]: [LoggerLevels.Info, LoggerLevels.Log, LoggerLevels.Warn, LoggerLevels.Error],
  [LoggerLevels.Log]: [LoggerLevels.Log, LoggerLevels.Warn, LoggerLevels.Error],
  [LoggerLevels.Warn]: [LoggerLevels.Warn, LoggerLevels.Error],
  [LoggerLevels.Error]: [LoggerLevels.Error],
};

export const LOGGER_COLORS: Record<string, [number, number]> = {
  default: [0, 0],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39],
};

export type LoggerTransport = (
  level: LoggerLevels,
  message: string | Error,
  metadata: LoggerMetadata,
) => void;

export type LoggerMetadata = {
  type?:
    | 'default'
    | 'debug'
    | 'error'
    | 'navigation'
    | 'http'
    | 'info'
    | 'query'
    | 'transaction'
    | 'ui'
    | 'user';

  tags?: {
    [key: string]: number | string | boolean | bigint | symbol | null | undefined;
  };

  [key: string]: unknown;
};
