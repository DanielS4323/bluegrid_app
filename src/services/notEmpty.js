export const notEmpty = (value) => {
  let val = value.trim();

  if (val.length < 1) {
    return true;
  }
  return false;
};
