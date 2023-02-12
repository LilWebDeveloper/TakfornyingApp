import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddressesMapPage from "./pages/AddressesMap";
import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage, {action as newOrderAction} from "./pages/orders/NewOrder";
import OrderDetailPage, {
  loader as OrderLoader,
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
            loader: OrdersLoader
          },
          {
            path: "edit",
            element: <EditOrderPage />,
          },
        ],
      },
      { path: "orders/new", element: <NewOrderPage />, action: newOrderAction },
      { path: "addresses", element: <AddressesMapPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
