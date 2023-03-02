export default async function SelectEmployeesLoader() {
    const response = await fetch(
      "http://localhost:5050/employees/"
    );
  
    if (!response.ok) {
     
    } else {
      const resData = await response.json();
  
      // const loadedEmployees: any[] = [];
  
      // for (const key in resData.employees) {
      //   loadedEmployees.push({
      //     id: key,
      //     value: resData[key].id,
      //     label: resData[key].firstName + " " + resData[key].secondName,
      //   });
      // }
      console.log(resData.employees)
  
      return resData.employees;
    }
  }
