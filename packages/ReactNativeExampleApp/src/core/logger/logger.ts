import { Config } from '../constants/config';
import { ENABLED_LOG_LEVELS, LoggerLevels, LoggerMetadata, LoggerTransport } from './logger.types';

export class Logger {
  enabled: boolean = Config.LOG_ENABLED === 'true';

  level: LoggerLevels = Config.LOG_LEVEL as LoggerLevels;

  transports: LoggerTransport[] = [];

  debug = (message: string, metadata: LoggerMetadata = {}) => {
    this.transport(LoggerLevels.Debug, message, metadata);
  };

  info = (message: string, metadata: LoggerMetadata = {}) => {
    this.transport(LoggerLevels.Info, message, metadata);
  };

  log = (message: string, metadata: LoggerMetadata = {}) => {
    this.transport(LoggerLevels.Log, message, metadata);
  };

  warn = (message: string, metadata: LoggerMetadata = {}) => {
    this.transport(LoggerLevels.Warn, message, metadata);
  };

  error = (error: Error, metadata: LoggerMetadata = {}) => {
    if (error instanceof Error) {
      this.transport(LoggerLevels.Error, error, metadata);
    } else {
      this.transport(
        LoggerLevels.Error,
        new Error('logger.error was not provided a Error'),
        metadata,
      );
    }
  };

  addTransport = (transport: LoggerTransport) => {
    this.transports.push(transport);

    return () => {
      this.transports.splice(this.transports.indexOf(transport), 1);
    };
  };

  disable = () => {
    this.enabled = false;
  };

  enable = () => {
    this.enabled = true;
  };

  protected transport = (
    level: LoggerLevels,
    message: string | Error,
    metadata: LoggerMetadata = {},
  ) => {
    if (!this.enabled) {
      return;
    }

    if (!ENABLED_LOG_LEVELS[this.level].includes(level)) {
      return;
    }

    for (const transport of this.transports) {
      transport(level, message, metadata || {});
    }
  };
}
