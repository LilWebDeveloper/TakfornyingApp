import { EmployeeResData } from "../../interfaces/Employee";
import { EmployeeParamsType } from "../../interfaces/ParamsTypes";
import { getAuthToken } from "../../util/auth";

export default async function EmployeeLoader({ params }: EmployeeParamsType) {
  const id = params.employeeId;
  const token = getAuthToken();
  const response = await fetch("http://localhost:5050/employees/" + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  } );

  if (!response.ok) {
    throw new Error('Could not fetch employee!');
  } else {
    const resData: EmployeeResData = await response.json();
    return resData.employee;
  }
}
