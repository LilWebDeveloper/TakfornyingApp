import { redirect } from "react-router-dom";

export default async function ManipulateEmployeeAction({ request, params }: any) {
    const method = request.method;
  
    const data = await request.formData();
  
    const employeeData = {
      firstName: data.get("firstName"),
      secondName: data.get("secondName"),
      jobPosition: data.get("jobPosition"),
      dNumber: data.get("dNumber"),
      login: data.get("userLogin"),
      password: data.get("password"),
    };
  
    let url = 'http://localhost:5050/employees/new'
  
    if(method === 'PATCH'){
      const employeeId = params.employeeId
      url = 'http://localhost:5050/employees/' + employeeId + '/edit'
    }
  
    const response = await fetch(url ,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      }
    );
  
    if (!response.ok) {
      console.log(employeeData);
    }
  
    return redirect("/dashboard/employees");
  }