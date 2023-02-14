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
  
    let url = 'https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees.json'
  
    if(method === 'PATCH'){
      const employeeId = params.employeeId
      url = 'https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees/' + employeeId + '.json'
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
  
    return redirect("/employees");
  }