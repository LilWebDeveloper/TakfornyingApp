import EmployeeForm from "../../components/employees/EmployeeForm";

function NewEmployeePage() {
  return (
    <>
      <h1>Add New Employee</h1>
          <EmployeeForm method='post'/>
    </>
  );
}

export default NewEmployeePage;