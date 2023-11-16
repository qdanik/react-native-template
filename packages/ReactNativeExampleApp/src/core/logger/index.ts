import { Logger } from './logger';
import { consoleTransport } from './logger.console';

export const logger = new Logger();

// TODO: check env and add transports
logger.addTransport(consoleTransport);
