import { FormMethod } from 'react-router-dom';
import Employee from '../interfaces/Employee'

export default interface OrderType {
  map(arg0: (data: any) => JSX.Element): import("react").ReactNode;
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

export interface OrdersResData {
  orders: OrderType
}

export interface EmployeeOrdersResData {
  employeeOrders: {
    orders: OrderType
  }
}

export interface EmployeeOrderType{
  orders: OrderType
}

export interface OrderResData {
  order: OrderType
}

export interface OrderFormType {
  method: FormMethod,
  order?: OrderType | undefined,
  selectEmployees: Employee
}