import { useLoaderData } from "react-router-dom";

import EmployeesList from "../../components/employees/EmployeesList";
import EmployeeType from "../../interfaces/Employee";

function EmployeesPage() {
  const employees = useLoaderData() as EmployeeType[];

  return <EmployeesList employees={employees} />;
}

export default EmployeesPage;

