import { useLoaderData } from "react-router-dom";

import EmployeesList from "../../components/employees/EmployeesList";
import { EmployeesResData } from "../../interfaces/Employee";

function EmployeesPage() {
  const data = useLoaderData() as EmployeesResData;

  return <EmployeesList employees={data.employees} pagination={data.pagination} />;
}

export default EmployeesPage;

