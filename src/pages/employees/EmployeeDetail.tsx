import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import EmployeesList from "../../components/employees/EmployeesList";
import EmployeeItem from "../../components/employees/EmployeeItem";


function EmployeeDetailPage() {
  const employees: any = useLoaderData();
  const employee: any = useRouteLoaderData("employee-detail");

  return (
    <>
      <EmployeeItem employee={employee}/>
      <EmployeesList employees={employees}/>
    </>
  );
}

export default EmployeeDetailPage;