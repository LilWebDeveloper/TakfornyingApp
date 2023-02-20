export default async function SelectEmployeesLoader() {
    const response = await fetch(
      "https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/employees.json"
    );
  
    if (!response.ok) {
     
    } else {
      const resData = await response.json();
  
      const loadedEmployees: any[] = [];
  
      for (const key in resData) {
        loadedEmployees.push({
          id: key,
          value: resData[key].firstName + " " + resData[key].secondName,
          label: resData[key].firstName + " " + resData[key].secondName,
        });
      }
  
      return loadedEmployees;
    }
  }
