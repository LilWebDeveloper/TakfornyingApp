import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import AddressesMapPage from "./pages/AddressesMap";
import EditOrderPage from "./pages/orders/EditOrder";
import NewOrderPage from "./pages/orders/NewOrder";
import OrderDetailPage from "./pages/orders/OrderDetail";
import OrdersPage from "./pages/orders/Orders";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <AddressesMapPage /> },
      {
        path: "orders",
        element: <OrdersPage />,
        loader: async () => {
          const response = await fetch("https://takfornyingmenagmentapp-default-rtdb.europe-west1.firebasedatabase.app/orders.json");

          if (!response.ok) {
            // ...
          } else {
            const resData = await response.json();

            const loadedOrders: any[] = [];

            for(const key in resData){
              loadedOrders.push({
                id: key,
                address: resData[key].address,
                roofPaint: resData[key].roofPaint,
                roofSize: resData[key].roofSize,
                roofAngle: resData[key].roofAngle,
                description: resData[key].description
              });
            }

            return loadedOrders
          }
        },
      },
      { path: "orders/:orderId", element: <OrderDetailPage /> },
      { path: "orders/new", element: <NewOrderPage /> },
      { path: "orders/:orderId/edit", element: <EditOrderPage /> },
      { path: "addresses", element: <AddressesMapPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
