import { FormMethod } from 'react-router-dom';
import Employee from '../interfaces/Employee'

export default interface OrdersType {
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

export interface OrderType {
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
  orders: OrdersType
}

export interface EmployeeOrdersResData {
  employeeOrders: {
    orders: OrdersType
  }
}

export interface EmployeeOrderType{
  orders: OrdersType
}

export interface OrderResData {
  order: OrdersType
}

export interface OrderFormType {
  method: FormMethod,
  order?: OrdersType | undefined,
  selectEmployees: Employee
}