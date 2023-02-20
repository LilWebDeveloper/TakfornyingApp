import { json } from "react-router-dom";

export default async function EmployeeLoader({ request, params }: any) {
  const id = params.employeeId;

  const response = await fetch(
    "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees/" +
      id +
      ".json"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected employee." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
