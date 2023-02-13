import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import EmployeeForm from "../../components/employees/EmployeeForm";
import { redirect } from "react-router-dom";

function NewEmployeePage() {
  return (
    <>
      <h1>Add New Employee</h1>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <EmployeeForm />
        </Paper>
      </Grid>
    </>
  );
}

export default NewEmployeePage;

export async function action({ request, params }: any) {
  const data = await request.formData();

  const employeeData = {
    firstName: data.get("firstName"),
    secondName: data.get("secondName"),
    jobPosition: data.get("jobPosition"),
    dNumber: data.get("dNumber"),
    login: data.get("firstNumber"),
    password: data.get('password')
  };

  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    }
  );

  if (!response.ok) {
    // error 
  }

  return redirect("/employees");
}
