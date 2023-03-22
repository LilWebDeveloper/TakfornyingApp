import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import EmployeesList from "../../components/employees/EmployeesList";
import EmployeeItem from "../../components/employees/EmployeeItem";


function EmployeeDetailPage() {
  const employees = useLoaderData();
  const employee = useRouteLoaderData("employee-detail");

  return (
    <>
      <EmployeeItem employee={employee}/>
      <EmployeesList employees={employees}/>
    </>
  );
}

export default EmployeeDetailPage;