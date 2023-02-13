import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import EmployeeForm from "../../components/employees/EmployeeForm";

function NewEmployeePage() {
  return (
    <>
      <h1>Add New Employee</h1>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <EmployeeForm method='post'/>
        </Paper>
      </Grid>
    </>
  );
}

export default NewEmployeePage;