/* eslint-disable no-console */
export const logger = {
  info: (message: string) => {
    console.log(message);
  },
  error: (message: string) => {
    console.error(message);
  },
  warn: (message: string) => {
    console.warn(message);
  },
};
