import { LoginResData } from "../../interfaces/Login";
import RequestType from "../../interfaces/RequestType";
import { setExpirationToLocalStorage, setTokenToLocalStorage } from "../../utils/LocalStorage";

export default async function loginAction({ request }: RequestType) {
  const data = await request.formData();
  const authData = {
    login: data.get("login"),
    password: data.get("password"),
  };

  const response = await fetch(`${process.env.REACT_APP_FETCH_ADDRESS!}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error("Could not authenticate user!");
  }

  const resData: LoginResData = await response.json();
  const token = resData.token;

  setTokenToLocalStorage(token);
  setExpirationToLocalStorage()

  return resData;
}
