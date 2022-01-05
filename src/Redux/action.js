export const actionConstants = {
  AUTH: "AUTH"
};
export const auth = () => {
  return {
    type: actionConstants.AUTH,
    payload: actionConstants.AUTH
  };
};
