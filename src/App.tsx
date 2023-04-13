import { Suspense, lazy } from "react";

import RootLayout from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// API MAP
import AddressesMapPage from "./pages/AddressesMap";

// EMPLOYEE
import NewEmployeePage from "./pages/employees/NewEmployee";
import EditEmployeePage from "./pages/employees/EditEmployee";

//loaders
import EmployeeLoader from "./services/loaders/EmployeeLoader";

import ManipulateEmployeeAction from "./services/actions/ManipulateEmployeeAction";
import DeleteEmployeeAction from "./services/actions/DeleteEmployeeAction";

// ORDERS
import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage from "./pages/orders/NewOrder";

import OrderLoader from "./services/loaders/OrderLoader";

import ManipulateOrderAction from "./services/actions/ManipulateOrderAction";
import DeleteOrderAction from "./services/actions/DeleteOrderAction";

// LOGIN
import LoginPage from "./pages/login/Login";

import { checkAuthLoader, tokenLoader } from "./util/auth";

import loginAction from "./services/actions/LoginAction";
import { logoutAction } from "./services/actions/logout";

import { AdminProtect, ManagerProtect } from "./pages/AdminProtect";

import ErrorContent from "./pages/Error";

const OrdersPage = lazy(() => import("./pages/orders/Orders"));
const OrderDetailPage = lazy(() => import("./pages/orders/OrderDetail"));

const EmployeesPage = lazy(() => import("./pages/employees/Employees"));
const EmployeeDetailPage = lazy(
  () => import("./pages/employees/EmployeeDetail")
);

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
                loader: () =>
                  import("./services/loaders/EmployeeOrdersLoader").then(
                    (module) => module.EmployeeOrdersLoader()
                  ),
                children: [
                  {
                    index: true,
                    element: <AddressesMapPage />,
                    loader: () =>
                      import("./services/loaders/OrdersLoader").then((module) =>
                        module.OrdersLoader()
                      ),
                  },
                  // API MAP ADDRESSES
                  {
                    path: "addresses",
                    element: <AddressesMapPage />,
                    loader: () =>
                      import("./services/loaders/OrdersLoader").then((module) =>
                        module.OrdersLoader()
                      ),
                  },
                ],
              },
              // EMPLOYEES

              {
                path: "employees",
                element: (
                  <AdminProtect>
                    <Suspense fallback={<p>Loading...</p>}>
                      <EmployeesPage />
                    </Suspense>
                  </AdminProtect>
                ),
                loader: () =>
                  import("./services/loaders/EmployeesLoader").then((module) =>
                    module.EmployeesLoader()
                  ),
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
                        <Suspense fallback={<p>Loading...</p>}>
                          <EmployeeDetailPage />
                        </Suspense>
                      </AdminProtect>
                    ),
                    loader: () =>
                      import("./services/loaders/EmployeesLoader").then(
                        (module) => module.EmployeesLoader()
                      ),
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
                loader: () =>
                  import("./services/loaders/EmployeeOrdersLoader").then(
                    (module) => module.EmployeeOrdersLoader()
                  ),
                children: [
                  {
                    path: "orders",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <OrdersPage />
                      </Suspense>
                    ),
                    loader: () =>
                      import("./services/loaders/OrdersLoader").then((module) =>
                        module.OrdersLoader()
                      ),
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
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <OrderDetailPage />
                      </Suspense>
                    ),
                    loader: () =>
                      import("./services/loaders/OrdersLoader").then((module) =>
                        module.OrdersLoader()
                      ),
                    action: DeleteOrderAction,
                  },
                  {
                    id: "select-employee-loader",
                    loader: () =>
                      import("./services/loaders/SelectEmployeesLoader").then(
                        (module) => module.SelectEmployeesLoader()
                      ),
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
                loader: () =>
                  import("./services/loaders/SelectEmployeesLoader").then(
                    (module) => module.SelectEmployeesLoader()
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
