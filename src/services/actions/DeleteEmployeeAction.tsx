import { redirect, json } from "react-router-dom";

export default async function DeleteEmployeeAction({ params, request }: any) {
    const employeeId = params.employeeId;
    const response = await fetch(
      "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees/" +
        employeeId +
        ".json", {
          method: request.method,
        }
    );
  
    if (!response.ok) {
      throw json(
        { message: "Could not delete employee." },
        { status: 500 }
      );
    }
  
    return redirect('/employees')
  }

