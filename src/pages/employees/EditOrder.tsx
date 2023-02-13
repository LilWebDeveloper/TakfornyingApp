import { useRouteLoaderData } from "react-router-dom";
import EmployeeForm from '../../components/employees/EmployeeForm'

function EditEmployeePage() {
  const employee: any = useRouteLoaderData('employee-detail');

    return <>
      <h1>Edit employee</h1>
      <EmployeeForm employee={employee}/>
    </>
  }
  
  export default EditEmployeePage;