import { useRouteLoaderData } from "react-router-dom";
import EmployeeForm from '../../components/employees/EmployeeForm'

function EditEmployeePage() {
  const employee = useRouteLoaderData('employee-detail');

    return <>
      <h1>Edit employee</h1>
      <EmployeeForm method='patch' employee={employee}/>
    </>
  }
  
  export default EditEmployeePage;