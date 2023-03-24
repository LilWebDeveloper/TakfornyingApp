import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import EmployeesList from "../../components/employees/EmployeesList";
import EmployeeItem from "../../components/employees/EmployeeItem";
import EmployeeType from "../../interfaces/Employee";


function EmployeeDetailPage() {
  const employees = useLoaderData() as EmployeeType;
  const employee = useRouteLoaderData("employee-detail") as EmployeeType;

  return (
    <>
      <EmployeeItem employee={employee}/>
      <EmployeesList employees={employees}/>
    </>
  );
}

export default EmployeeDetailPage;