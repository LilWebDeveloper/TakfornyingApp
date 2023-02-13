import { useRouteLoaderData, useLoaderData, json, redirect } from "react-router-dom";
import EmployeesList from "../../components/employees/EmployeesList";
import EmployeeItem from "../../components/employees/EmployeeItem";


function EmployeeDetailPage() {
  const employees: any = useLoaderData();
  const employee: any = useRouteLoaderData("employee-detail");

  return (
    <>
      <EmployeeItem employee={employee}/>
      <EmployeesList employees={employees}/>
    </>
  );
}

export default EmployeeDetailPage;


export async function loader({ request, params }: any) {
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

export async function action({ params, request }: any) {
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
