export default async function SelectEmployeesLoader() {
    const response = await fetch(
      "http://localhost:5050/employees/"
    );
  
    if (!response.ok) {
     //error
    } else {
      const resData = await response.json();
      return resData.employees;
    }
  }
