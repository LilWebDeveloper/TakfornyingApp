import { json, redirect } from "react-router-dom";

export default async function loginAction({ request }: any) {
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
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token
  localStorage.setItem('token', token)

  return redirect("dashboard");
}
