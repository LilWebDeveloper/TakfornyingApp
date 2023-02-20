import RootLayout from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// API MAP
import AddressesMapPage from "./pages/AddressesMap";

// EMPLOYEE
import NewEmployeePage from "./pages/employees/NewEmployee";
import EmployeesPage from "./pages/employees/Employees";
import EmployeeDetailPage from "./pages/employees/EmployeeDetail";
import EditEmployeePage from "./pages/employees/EditEmployee";

import EmployeeLoader from "./services/loaders/EmployeeLoader";
import EmployeesLoader from "./services/loaders/EmployeesLoader";

import ManipulateEmployeeAction from "./services/actions/ManipulateEmployeeAction";
import DeleteEmployeeAction from "./services/actions/DeleteEmployeeAction";

// ORDERS
import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage from "./pages/orders/NewOrder";
import OrderDetailPage from "./pages/orders/OrderDetail";
import OrdersPage from "./pages/orders/Orders";

import OrdersLoader from "./services/loaders/OrdersLoader";
import OrderLoader from "./services/loaders/OrderLoader";

import ManipulateOrderAction from "./services/actions/ManipulateOrderAction";
import DeleteOrderAction from "./services/actions/DeleteOrderAction";

import SelectEmployeesLoader from "./components/orders/SelectEmployeesLoader";
import LoginPage from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: "dashboard",
    element: <RootLayout />,
    children: [
      { index: true, element: <AddressesMapPage /> },

      // EMPLOYEES
      {
        path: "employees",
        element: <EmployeesPage />,
        loader: EmployeesLoader,
      },
      {
        path: "employees/:employeeId",
        id: "employee-detail",
        loader: EmployeeLoader,
        children: [
          {
            index: true,
            element: <EmployeeDetailPage />,
            loader: EmployeesLoader,
            action: DeleteEmployeeAction,
          },
          {
            path: "edit",
            element: <EditEmployeePage />,
            action: ManipulateEmployeeAction,
          },
        ],
      },
      {
        path: "employees/new",
        element: <NewEmployeePage />,
        action: ManipulateEmployeeAction,
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
            action: DeleteOrderAction,
          },
          {
            path: "edit",
            element: <EditOrderPage />,
            action: ManipulateOrderAction,
          },
        ],
      },
      {
        path: "orders/new",
        element: <NewOrderPage />,
        action: ManipulateOrderAction,
        loader: SelectEmployeesLoader,
      },

      // API MAP ADDRESSES
      { path: "addresses", element: <AddressesMapPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
