export const composeTestID = (...args: (string | undefined)[]) => {
  return args.filter(Boolean).join('_');
};
