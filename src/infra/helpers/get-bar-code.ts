export const getBarCode = (code: string, verifiedDigits: number) => {
  const barCodeVerification = Number(code[verifiedDigits]);
  const identifierBankCode = code.slice(0, verifiedDigits);

  const restDigitableLineWithoutCurrencyCode = code.slice(
    verifiedDigits + 1,
    44
  );

  const barCode = identifierBankCode + restDigitableLineWithoutCurrencyCode;

  return { barCode, barCodeVerification };
};
