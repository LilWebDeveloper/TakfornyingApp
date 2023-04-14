import RootLayout from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// API MAP
import AddressesMapPage from "./pages/AddressesMap";

// EMPLOYEE
import NewEmployeePage from "./pages/employees/NewEmployee";
import EditEmployeePage from "./pages/employees/EditEmployee";

import EmployeeLoader from "./services/loaders/EmployeeLoader";
import EmployeesLoader from "./services/loaders/EmployeesLoader";
import SelectEmployeesLoader from "./services/loaders/SelectEmployeesLoader";

import ManipulateEmployeeAction from "./services/actions/ManipulateEmployeeAction";
import DeleteEmployeeAction from "./services/actions/DeleteEmployeeAction";

// ORDERS
import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage from "./pages/orders/NewOrder";

import OrderLoader from "./services/loaders/OrderLoader";
import EmployeeOrdersLoader from "./services/loaders/EmployeeOrdersLoader";
import OrdersLoader from "./services/loaders/OrdersLoader";

import ManipulateOrderAction from "./services/actions/ManipulateOrderAction";
import DeleteOrderAction from "./services/actions/DeleteOrderAction";

// LOGIN
import LoginPage from "./pages/login/Login";

import { checkAuthLoader, tokenLoader } from "./utils/auth";

import loginAction from "./services/actions/LoginAction";
import { logoutAction } from "./services/actions/logout";

import { AdminProtect, ManagerProtect } from "./pages/AdminProtect";
import ErrorContent from "./pages/Error";
import EmployeesPage from "./pages/employees/Employees";
import EmployeeDetailPage from "./pages/employees/EmployeeDetail";
import OrdersPage from "./pages/orders/Orders";
import OrderDetailPage from "./pages/orders/OrderDetail";
import { useLoadScript } from "@react-google-maps/api";

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
          {
            errorElement: <ErrorContent />,
            children: [
              {
                id: "employee-orders-address",
                loader: EmployeeOrdersLoader,
                children: [
                  {
                    index: true,
                    element: <AddressesMapPage />,
                    loader: OrdersLoader,
                  },
                  // API MAP ADDRESSES
                  {
                    path: "addresses",
                    element: <AddressesMapPage />,
                    loader: OrdersLoader,
                  },
                ],
              },
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
                id: "employee-orders",
                loader: EmployeeOrdersLoader,
                children: [
                  {
                    path: "orders",
                    element: <OrdersPage />,
                    loader: OrdersLoader,
                  },
                ],
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
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });
  
  return <RouterProvider router={router} />;
}

export default App;
