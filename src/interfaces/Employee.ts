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
    employee: EmployeeType;
}
