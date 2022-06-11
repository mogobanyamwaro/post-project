export const persistToken = (tokens: { accessToken: string } | "") => {
  let token = "";
  if (tokens) {
    token = tokens.accessToken;
  }

  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};
