import { LoginResData } from "../../interfaces/Login";
import RequestType from "../../interfaces/RequestType";

export default async function loginAction({ request }: RequestType) {
  const data = await request.formData();
  const authData = {
    login: data.get("login"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:5050/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  })

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error("Could not authenticate user!");
  }

  const resData: LoginResData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return resData;
}
