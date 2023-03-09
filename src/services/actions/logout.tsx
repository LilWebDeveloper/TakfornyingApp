import { redirect } from "react-router-dom";

export function logoutAction() {
  localStorage.removeItem("token");
  return redirect("/");
}
