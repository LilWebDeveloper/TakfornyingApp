import { useRouteLoaderData, useLoaderData } from "react-router-dom";
import EmployeesList from "../../components/employees/EmployeesList";
import EmployeeItem from "../../components/employees/EmployeeItem";
import EmployeeType, { EmployeesResData } from "../../interfaces/Employee";
import ErrorContent from "../Error";


function EmployeeDetailPage() {
  const data = useLoaderData() as EmployeesResData;
  const employee = useRouteLoaderData("employee-detail") as EmployeeType;


  if(employee.status === 500){
    return <ErrorContent />
  }

  return (
    <>
      <EmployeeItem employee={employee}/>
      <EmployeesList employees={data.employees} pagination={data.pagination}/>
    </>
  );
}

export default EmployeeDetailPage;