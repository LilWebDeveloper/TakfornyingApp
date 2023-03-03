import Employee from '../interfaces/Employee'

export default interface OrderType {
  address: string;
  createdAt: string | undefined;
  description: string;
  roofAngle: number;
  roofPaint: string;
  roofSize: number;
  updatedAt: string | undefined;
  worker: Employee;
  __v: number | undefined;
  _id: string | undefined;
}
