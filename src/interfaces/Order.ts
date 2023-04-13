import { FormMethod } from 'react-router-dom';
import { EmployeeType } from '../interfaces/Employee'

export default interface OrdersType {
  address: string;
  createdAt: string | undefined;
  description: string;
  roofAngle: number;
  roofPaint: string;
  roofSize: number;
  lat: number;
  lng: number;
  updatedAt: string | undefined;
  worker: EmployeeType;
  __v: number | undefined;
  _id: string | undefined;
  status?: number;
}

export interface OrderType {
  address: string;
  createdAt: string | undefined;
  description: string;
  roofAngle: number;
  roofPaint: string;
  roofSize: number;
  lat: number;
  lng: number;
  updatedAt: string | undefined;
  worker: Employee;
  __v: number | undefined;
  _id: string | undefined;
}

export interface OrdersResData {
  orders: OrdersType[]
}

export interface EmployeeOrdersResData {
  employeeOrders: {
    orders: OrdersType[]
  }
}

export interface EmployeeOrderType{
  orders: OrdersType[]
}

export interface OrderResData {
  order: OrdersType
}

export interface OrderFormType {
  method: FormMethod,
  order?: OrdersType | undefined,
  selectEmployees: EmployeeType[]
}

export interface EmployeeOrdersMap{
  employeeAddresses: {
    orders: OrderType[]
  }
}

export interface AllAddressesMap{
  allAddresses: OrderType[]
}