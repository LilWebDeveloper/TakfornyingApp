import { FormMethod } from "react-router-dom";

export default interface EmployeeType {
  dNumber: number;
  firstName: string;
  jobPosition: string;
  login: string;
  password: string;
  secondName: string;
  _id: string;
}

export interface EmployeeResData {
    employees: EmployeeType;
}

export interface EmployeeFormType {
  method: FormMethod,
  employee: EmployeeType | undefined
}
