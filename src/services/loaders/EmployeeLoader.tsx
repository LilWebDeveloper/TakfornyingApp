import { json } from "react-router-dom";
import { EmployeeResData } from "../../interfaces/Employee";
import { EmployeeParamsType } from "../../interfaces/ParamsTypes";
import { getAuthToken } from "../../util/auth";

export default async function EmployeeLoader({ params }: EmployeeParamsType) {
  const id = params.employeeId;
  const token = getAuthToken();
  const response = await fetch("https://takfornying.onrender.com/employees/" + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  } );

  if (!response.ok) {
    return json({ message: "Could not fetch employee.", status: 500 });
  } else {
    const resData: EmployeeResData = await response.json();
    return resData.employee;
  }
}
