import { screen, render } from "@testing-library/react";
import EmployeeItem from "../components/employees/EmployeeItem";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

const employee = {
  dNumber: 12345678945,
  firstName: "Jan",
  jobPosition: "Employee",
  login: "jkowalski",
  password: "jkowalski",
  secondName: "Kowalski",
  _id: "p1",
  status: 200,
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<EmployeeItem  employee={employee}/>}></Route>
  )
);

  test("Render employee details", async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>);

    const tableBodyElement = screen.getAllByRole("employee-details")[0];
    expect(tableBodyElement).toHaveTextContent(employee.firstName);
    expect(tableBodyElement).toHaveTextContent(employee.secondName);
    expect(tableBodyElement).toHaveTextContent(employee.jobPosition);
  })