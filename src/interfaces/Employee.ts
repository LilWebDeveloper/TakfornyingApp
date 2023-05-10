import { FormMethod } from "react-router-dom";

export default interface EmployeesType {
  dNumber: number;
  firstName: string;
  jobPosition: string;
  login: string;
  password: string;
  secondName: string;
  _id: string;
  status?: number;
}

export interface EmployeeType {
  dNumber: number;
  firstName: string;
  jobPosition: string;
  login: string;
  password: string;
  secondName: string;
  _id: string;
}

export interface EmployeesResData {
  pagination: {
    count: number;
    pageCount: Number;
  };
  employees: EmployeesType[];
}

export interface PaginationType {
  page: number;
  pageCount: number;
}

export interface EmployeeResData {
  employee: EmployeesType;
}

export interface EmployeeFormType {
  method: FormMethod;
  employee?: EmployeesType;
}
