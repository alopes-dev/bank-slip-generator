export const checkIfIsNumberOnly = (code: string): boolean => {
  const reg = /^\d+$/;

  return reg.test(code);
};
