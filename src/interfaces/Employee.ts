import { FormMethod } from "react-router-dom";

export default interface EmployeeType {
  map(arg0: (data: any) => JSX.Element): import("react").ReactNode;
  dNumber: number;
  firstName: string;
  jobPosition: string;
  login: string;
  password: string;
  secondName: string;
  id: string;
}

export interface EmployeesResData {
  employees: EmployeeType;
}

export interface EmployeeResData {
  employee: EmployeeType;
}

export interface EmployeeFormType {
  method: FormMethod,
  employee?: EmployeeType
}
