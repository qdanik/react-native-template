export const composeTestID = (...args: (string | undefined)[]) => args.filter(Boolean).join('_');
