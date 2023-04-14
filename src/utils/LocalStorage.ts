export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

export const setExpirationToLocalStorage = () => {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
};
