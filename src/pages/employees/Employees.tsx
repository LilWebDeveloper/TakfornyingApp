import { useLoaderData } from "react-router-dom";

import EmployeesList from "../../components/employees/EmployeesList";

function EmployeesPage() {
  const employees: any = useLoaderData();

  return <EmployeesList employees={employees} />;
}

export default EmployeesPage;

