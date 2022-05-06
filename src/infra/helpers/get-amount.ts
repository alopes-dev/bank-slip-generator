export const getAmount = (code: string) => {
  const slicedValue =
    code.length === 47 ? code.slice(38, 47) : code.slice(4, 15);

  const parsedValue = parseInt(slicedValue, 10);

  return (parsedValue / 100).toFixed(2);
};
