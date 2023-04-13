import { screen, render } from "@testing-library/react";
import OrderItem from "../components/orders/OrderItem";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const order = {
  address: "Starowiejska 50, Gdańsk",
  createdAt: undefined,
  description: "paint roof",
  roofAngle: 25,
  roofPaint: "Black Mat",
  roofSize: 350,
  lat: 54,
  lng: 20,
  updatedAt: undefined,
  worker: {
    dNumber: 12654897546,
    firstName: "Kacper",
    jobPosition: "Manager",
    login: "kpietruszka",
    password: "kpietruszka",
    secondName: "Pietruszka",
    _id: "365478954658795465215465",
  },
  __v: undefined,
  _id: undefined,
  status: 200,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<OrderItem order={order} />}></Route>
  )
);

test("Render order details", async () => {
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  const tableBodyElement = screen.getAllByRole("order-details")[0];
  expect(tableBodyElement).toHaveTextContent(order.address);
  expect(tableBodyElement).toHaveTextContent(order.roofPaint);
  expect(tableBodyElement).toHaveTextContent(order.roofSize.toString());
  expect(tableBodyElement).toHaveTextContent(order.roofAngle.toString());
  expect(tableBodyElement).toHaveTextContent(order.description);
});
