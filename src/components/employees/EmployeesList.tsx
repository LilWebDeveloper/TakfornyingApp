import List from "../items/List";

const EmployeesList = ({ employees }: any) => {
  return <List title='All employees' dataset={employees}/>
};

export default EmployeesList;