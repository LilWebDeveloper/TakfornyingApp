import { FormMethod } from "react-router-dom"
import Order from './Order'
import Employee from "./Employee"

export default interface OrderFormType {
    method: FormMethod,
    order: Order | undefined,
    selectEmployees: Employee[]
  }