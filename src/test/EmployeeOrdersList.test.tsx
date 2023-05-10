import { screen, render } from "@testing-library/react";
import EmployeeOrdersList from "../components/orders/EmployeeOrdersList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const employeeOrders = {
  orders: [
    {
      address: "Starowiejska 60, Gdańsk",
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
        firstName: "Jan",
        jobPosition: "Employee",
        login: "jkowalski",
        password: "jkowalski",
        secondName: "Kowalski",
        _id: "452145687324565478655423",
      },
      __v: undefined,
      _id: "p1",
      status: 200,
    },
    {
      address: "Okrzei 13, Karlino",
      createdAt: undefined,
      description: "wash and paint roof",
      roofAngle: 30,
      roofPaint: "Red Mat",
      roofSize: 205,
      lat: 45,
      lng: 35,
      updatedAt: undefined,
      worker: {
        dNumber: 12654897546,
        firstName: "Jan",
        jobPosition: "Employee",
        login: "jkowalski",
        password: "jkowalski",
        secondName: "Kowalski",
        _id: "452145687324565478655423",
      },
      __v: undefined,
      _id: "p2",
      status: 200,
    },
  ],
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<EmployeeOrdersList orders={employeeOrders.orders} pagination={undefined} />}
    ></Route>
  )
);

test("Render employee orders list", async () => {
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  const tableBodyElement1 = screen.getAllByRole("employee-orders-list")[0];
  const tableBodyElement2 = screen.getAllByRole("employee-orders-list")[1];
  expect(tableBodyElement1).toHaveTextContent(employeeOrders.orders[0].address);
  expect(tableBodyElement2).toHaveTextContent(employeeOrders.orders[1].address);
});
