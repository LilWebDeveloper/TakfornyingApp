import { useRouteLoaderData } from "react-router-dom";
import EmployeeForm from '../../components/employees/EmployeeForm'
import EmployeeType from "../../interfaces/Employee";

function EditEmployeePage() {
  const employee = useRouteLoaderData('employee-detail') as EmployeeType;

    return <>
      <h1>Edit employee</h1>
      <EmployeeForm method='patch' employee={employee}/>
    </>
  }
  
  export default EditEmployeePage;