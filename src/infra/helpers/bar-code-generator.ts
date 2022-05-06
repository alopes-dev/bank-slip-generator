export const barCodeGenerator = (code: string) => {
  if (code.length === 47) {
    return (
      code.slice(0, 4) +
      code[32] +
      code.slice(33, 47) +
      code.slice(4, 9) +
      code.slice(10, 20) +
      code.slice(21, 31)
    );
  }

  return (
    code.slice(0, 11) +
    code.slice(12, 23) +
    code.slice(24, 35) +
    code.slice(36, 47)
  );
};
