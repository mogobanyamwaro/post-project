export const parserErrorMessage = (error: any): string => {
  const isArray = Array.isArray(error);
  if (isArray) {
    return error[0];
  }
  return error;
};
