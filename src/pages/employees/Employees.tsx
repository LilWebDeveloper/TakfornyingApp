import { useLoaderData } from "react-router-dom";

import EmployeesList from "../../components/employees/EmployeesList";

function EmployeesPage() {
  const employees: any = useLoaderData();

  return <EmployeesList employees={employees} />;
}

export default EmployeesPage;

export async function loader() {
  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees.json"
  );

  if (!response.ok) {
   
  } else {
    const resData = await response.json();

    const loadedEmployees: any[] = [];

    for (const key in resData) {
      loadedEmployees.push({
        id: key,
        firstName: resData[key].firstName,
        secondName: resData[key].secondName,
        jobPosition: resData[key].jobPosition,
        personNumber: resData[key].personNumber,
        login: resData[key].login,
        password: resData[key].password,
      });
    }

    return loadedEmployees;
  }
}
