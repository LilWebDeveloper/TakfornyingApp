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

import SelectEmployeesLoader from "./services/loaders/SelectEmployeesLoader";
import LoginPage from "./pages/login/Login";
import loginAction from "./services/actions/LoginAction";
import { logoutAction } from "./services/actions/logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { AdminProtect, ManagerProtect } from "./pages/AdminProtect";
import EmployeeOrdersLoader from "./services/loaders/EmployeeOrdersLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    action: loginAction,
  },
  {
    path: "logout",
    action: logoutAction,
  },
  {
    id: "token-loader",
    loader: tokenLoader,
    children: [
      {
        path: "dashboard",
        element: <RootLayout />,
        loader: checkAuthLoader,
        action: loginAction,
        children: [
          { index: true, element: <AddressesMapPage /> },
          // EMPLOYEES

          {
            path: "employees",
            element: (
              <AdminProtect>
                <EmployeesPage />
              </AdminProtect>
            ),
            loader: EmployeesLoader,
          },
          {
            path: "employees/:employeeId",
            id: "employee-detail",
            loader: EmployeeLoader,
            children: [
              {
                index: true,
                element: (
                  <AdminProtect>
                    <EmployeeDetailPage />
                  </AdminProtect>
                ),
                loader: EmployeesLoader,
                action: DeleteEmployeeAction,
              },
              {
                path: "edit",
                element: (
                  <AdminProtect>
                    <EditEmployeePage />
                  </AdminProtect>
                ),
                action: ManipulateEmployeeAction,
              },
            ],
          },
          {
            path: "employees/new",
            element: (
              <AdminProtect>
                <NewEmployeePage />
              </AdminProtect>
            ),
            action: ManipulateEmployeeAction,
          },

          // ORDERS
          {
            id: 'employee-orders',
            loader: EmployeeOrdersLoader,
            children: [
              {
                path: "orders",
                element: <OrdersPage />,
                loader: OrdersLoader
              },
            ]
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
                id: "select-employee-loader",
                loader: SelectEmployeesLoader,
                children: [
                  {
                    path: "edit",
                    element: (
                      <ManagerProtect>
                        <EditOrderPage />
                      </ManagerProtect>
                    ),
                    action: ManipulateOrderAction,
                  },
                ],
              },
            ],
          },
          {
            path: "orders/new",
            element: (
              <ManagerProtect>
                <NewOrderPage />
              </ManagerProtect>
            ),
            action: ManipulateOrderAction,
            loader: SelectEmployeesLoader,
          },

          // API MAP ADDRESSES
          { path: "addresses", element: <AddressesMapPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
