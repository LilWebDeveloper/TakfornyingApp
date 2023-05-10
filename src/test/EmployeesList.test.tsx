import { screen, render } from "@testing-library/react";
import EmployeesList from "../components/employees/EmployeesList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const employees = [
  {
    dNumber: 12345678945,
    firstName: "Jan",
    jobPosition: "Employee",
    login: "jkowalski",
    password: "jkowalski",
    secondName: "Kowalski",
    _id: "p1",
    status: 200,
  },
  {
    dNumber: 54987654321,
    firstName: "Kacper",
    jobPosition: "Employee",
    login: "kpietruszka",
    password: "kpietruszka",
    secondName: "Pietruszka",
    _id: "p2",
    status: 200,
  },
];
const pagination = {
  count: 2,
  pageCount: 1
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<EmployeesList employees={employees} pagination={pagination} />}></Route>
  )
);

test("Render employees list", async () => {
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  const tableBodyElement1 = screen.getAllByRole("employees-list")[0];
  const tableBodyElement2 = screen.getAllByRole("employees-list")[1];
  expect(tableBodyElement1).toHaveTextContent(employees[0].firstName);
  expect(tableBodyElement1).toHaveTextContent(employees[0].secondName);
  expect(tableBodyElement1).toHaveTextContent(employees[0].jobPosition);
  expect(tableBodyElement2).toHaveTextContent(employees[1].firstName);
  expect(tableBodyElement2).toHaveTextContent(employees[1].secondName);
  expect(tableBodyElement2).toHaveTextContent(employees[1].jobPosition);
});
