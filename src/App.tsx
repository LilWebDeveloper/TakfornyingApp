import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddressesMapPage from "./pages/AddressesMap";
import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage from "./pages/orders/NewOrder";
import OrderDetailPage, { loader as OrderLoader} from "./pages/orders/OrderDetail";
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
        element: <OrderDetailPage />,
        loader: OrderLoader,
      },
      { path: "orders/new", element: <NewOrderPage />, loader: OrdersLoader },
      { path: "orders/:orderId/edit", element: <EditOrderPage /> },
      { path: "addresses", element: <AddressesMapPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
