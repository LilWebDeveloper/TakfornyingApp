import React from "react";
import { screen, render } from "@testing-library/react";
import EmployeesList from "../components/employees/EmployeesList";
import EmployeeItem from "../components/employees/EmployeeItem";

describe("Employee Component Tests", () => {
  test("Render employee details", async () => {
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

    render(<EmployeeItem employee={employee} />);

    const tableBodyElement = screen.getAllByRole("employee-details");
    expect(tableBodyElement).toHaveTextContent(employee.firstName);
    expect(tableBodyElement).toHaveTextContent(employee.secondName);
    expect(tableBodyElement).toHaveTextContent(employee.jobPosition);
  })

  test("Render employees list", async () => {
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
        dNumber: 12345678946,
        firstName: "Jan2",
        jobPosition: "Employee",
        login: "jkowalski2",
        password: "jkowalski2",
        secondName: "Kowalski2",
        _id: "p2",
        status: 200,
      },
    ];

    render(<EmployeesList employees={employees} />);

    const h2Elements = screen.getAllByRole("name");
    expect(h2Elements).toHaveTextContent(employees[0].firstName);
  });
});