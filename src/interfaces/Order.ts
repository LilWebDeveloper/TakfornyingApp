import Employee from '../interfaces/Employee'

export default interface Order {
  address: string;
  createdAt: string;
  description: string;
  roofAngle: number;
  roofPaint: string;
  roofSize: number;
  updatedAt: string;
  worker: Employee;
  __v: number;
  _id: string;
}
