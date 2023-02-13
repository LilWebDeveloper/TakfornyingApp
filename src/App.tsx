import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddressesMapPage from "./pages/AddressesMap";

import NewEmployeePage from "./pages/employees/NewEmployee";
import EmployeesPage, { loader as EmployeesLoader} from "./pages/employees/Employees";
import EmployeeDetailPage, {loader as EmployeeLoader,action as DeleteEmployeeAction} from "./pages/employees/EmployeeDetail";
import EditEmployeePage from "./pages/employees/EditEmployee";
import { action as manipulateEmployeeAction } from './components/employees/EmployeeForm'


import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage, {action as NewOrderAction} from "./pages/orders/NewOrder";
import OrderDetailPage, {
  loader as OrderLoader,
  action as DeleteOrderAction
} from "./pages/orders/OrderDetail";
import OrdersPage, { loader as OrdersLoader } from "./pages/orders/Orders";

import RootLayout from "./pages/Root";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <AddressesMapPage /> },

      // EMPLOYEES
      {
        path: 'employees',
        element: <EmployeesPage />,
        loader: EmployeesLoader
      },
      {
        path: 'employees/:employeeId',
        id: 'employee-detail',
        loader: EmployeeLoader,
        children: [
          {
            index: true,
            element: <EmployeeDetailPage />,
            loader: EmployeesLoader,
            action: DeleteEmployeeAction
          },
          {
            path: "edit",
            element: <EditEmployeePage />,
            action: manipulateEmployeeAction
          },
        ]
      },
      {
        path: 'employees/new',
        element: <NewEmployeePage />,
        action: manipulateEmployeeAction
      },

      // ORDERS
      {
        path: "orders",
        element: <OrdersPage />,
        loader: OrdersLoader,
      },
      {
        path: "orders/:orderId",
        id: "order-detail",
        loader: OrderLoader,
        children: [
          {
            index: true,
            element: <OrderDetailPage />,
            loader: OrdersLoader,
            action: DeleteOrderAction
          },
          {
            path: "edit",
            element: <EditOrderPage />,
          },
        ],
      },
      { path: "orders/new", element: <NewOrderPage />, action: NewOrderAction },

      // API MAP ADDRESSES
      { path: "addresses", element: <AddressesMapPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
